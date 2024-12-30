import { ROOT_CODE } from "../constants";
import { ClientNode } from "../types";

class CustomTreeNode {
  code: string;
  name: string;
  registration_date?: Date;
  introducer_code: string;
  left_child?: CustomTreeNode;
  right_child?: CustomTreeNode;

  constructor({
    code,
    name,
    registration_date = new Date(),
    introducer_code,
    left_child,
    right_child,
  }: ClientNode) {
    this.code = code;
    this.name = name;
    this.registration_date = registration_date;
    this.introducer_code = introducer_code;
    this.left_child = left_child;
    this.right_child = right_child;
  }
}

const root = new CustomTreeNode({
  code: ROOT_CODE,
  name: "保戶1",
  introducer_code: ROOT_CODE,
});

root.left_child = new CustomTreeNode({
  code: "000000000002",
  name: "保戶2",
  introducer_code: ROOT_CODE,
});

root.right_child = new CustomTreeNode({
  code: "000000000003",
  name: "保戶3",
  introducer_code: ROOT_CODE,
});

root.left_child.left_child = new CustomTreeNode({
  code: "000000000004",
  name: "保戶4",
  introducer_code: ROOT_CODE,
});
root.left_child.right_child = new CustomTreeNode({
  code: "000000000005",
  name: "保戶5",
  introducer_code: ROOT_CODE,
});

root.right_child.left_child = new CustomTreeNode({
  code: "000000000006",
  name: "保戶6",
  introducer_code: "000000000003",
});
root.right_child.right_child = new CustomTreeNode({
  code: "000000000007",
  name: "保戶7",
  introducer_code: "000000000003",
});

root.left_child.left_child.left_child = new CustomTreeNode({
  code: "000000000008",
  name: "保戶8",
  introducer_code: "000000000004",
});
root.left_child.left_child.right_child = new CustomTreeNode({
  code: "000000000009",
  name: "保戶9",
  introducer_code: "000000000004",
});
root.left_child.right_child.left_child = new CustomTreeNode({
  code: "000000000010",
  name: "保戶10",
  introducer_code: "000000000005",
});
root.left_child.right_child.right_child = new CustomTreeNode({
  code: "000000000011",
  name: "保戶11",
  introducer_code: "000000000005",
});

root.right_child.left_child.left_child = new CustomTreeNode({
  code: "000000000012",
  name: "保戶12",
  introducer_code: ROOT_CODE,
});
root.right_child.left_child.right_child = new CustomTreeNode({
  code: "000000000013",
  name: "保戶13",
  introducer_code: "000000000006",
});
root.right_child.right_child.left_child = new CustomTreeNode({
  code: "000000000015",
  name: "保戶15",
  introducer_code: "000000000007",
});
root.right_child.right_child.right_child = new CustomTreeNode({
  code: "000000000016",
  name: "保戶16",
  introducer_code: "000000000007",
});

export default root;

//   code: string;
//   name: string;
//   registration_date: Date;
//   introducer_code: string;
