import { useMemo } from "react";
import Tree from "react-d3-tree";
import { useSearchParams } from "react-router-dom";
import { NODE_BG_COLORS, ROOT_CODE } from "../constants";
import root from "../data/mockClients";
import { TreeNode } from "../types";
import { getParentTreeNode, getSubtree, getTreeNode } from "../utils/tree";

export default function ClientChartTree() {
  const [searchParams, setSearchParams] = useSearchParams();

  const data = useMemo(() => {
    const code = searchParams.get("code") || ROOT_CODE;
    // console.log("code: " + code);

    const currentRoot = getTreeNode(root, code);
    return getSubtree(currentRoot, 4);
  }, [searchParams.get("code")]);

  const handleNodeClick = (nodeDatum: TreeNode) => {
    // console.log(nodeDatum);
    if (nodeDatum.attributes?.code !== (data?.attributes?.code ?? ROOT_CODE)) {
      // click non-top node
      return setSearchParams({ code: nodeDatum.attributes?.code });
    }

    if (nodeDatum.attributes?.code === ROOT_CODE) {
      // click root node
      return setSearchParams({ code: "" });
    }
    // click top node
    const parentNode = getParentTreeNode(root, nodeDatum.attributes?.code);
    if (!parentNode) return;
    setSearchParams({ code: parentNode.code });
  };

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" className="w-full h-full">
      {data ? (
        <Tree
          data={data}
          // onNodeClick={(data) => console.log(data.data)}
          orientation="vertical"
          nodeSize={{ x: 110, y: 100 }}
          separation={{ siblings: 1, nonSiblings: 1.08 }}
          renderCustomNodeElement={(props) =>
            renderCustomNode(
              props.nodeDatum,
              handleNodeClick,
              data?.attributes?.code ?? ROOT_CODE
            )
          }
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
        />
      ) : (
        <div className="h-full flex items-center justify-center">
          Not found!!!
        </div>
      )}
    </div>
  );
}

const renderCustomNode = (
  nodeDatum: TreeNode,
  handleNodeClick: (nodeDatum: TreeNode) => void,
  rootCode: string
) => (
  <g onClick={() => handleNodeClick(nodeDatum)} style={{ cursor: "pointer" }}>
    {/* Rectangle */}
    <rect
      width="100"
      height="40"
      x="-50"
      y="-20"
      fill={
        nodeDatum.attributes?.code === rootCode
          ? NODE_BG_COLORS.highlight
          : nodeDatum.attributes?.introducer_code === rootCode
          ? NODE_BG_COLORS.direct
          : NODE_BG_COLORS.indirect
      }
      stroke="black"
      strokeWidth="1"
      rx="5"
    />
    {/* Name Text */}
    {nodeDatum.attributes?.code === rootCode &&
      nodeDatum.attributes?.code !== ROOT_CODE && (
        <>
          <rect width="40" height="30" x="60" y="-15" fill="transparent" />
          <text x="80" y="0" textAnchor="middle" fill="blue" fontSize="12">
            ⌃
          </text>
          <text x="80" y="10" textAnchor="middle" fill="blue" fontSize="12">
            上一階
          </text>
        </>
      )}
    {/* ID Text */}
    <text
      x="-40"
      y="-5"
      textAnchor="start"
      fill={nodeDatum.attributes?.code === rootCode ? "black" : "blue"}
      fontSize="12"
      textDecoration={
        nodeDatum.attributes?.code === rootCode ? "none" : "underline"
      }
    >
      {nodeDatum.attributes?.code}
    </text>
    {/* Name Text */}
    <text x="-40" y="15" textAnchor="start" fill="black" fontSize="14">
      {nodeDatum.name}
    </text>
  </g>
);
