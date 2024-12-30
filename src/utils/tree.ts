import { ROOT_CODE } from "../constants";
import { Client, ClientNode, TreeNode } from "../types";

export function getTreeNode(
  root: ClientNode | null | undefined,
  code: string
): ClientNode | null {
  if (!root) return null;

  if (root.code === code) return root;

  const left = getTreeNode(root.left_child, code);
  if (left) return left;
  const right = getTreeNode(root.right_child, code);
  return right;
}

export function getParentTreeNode(
  root: ClientNode | null | undefined,
  code: string
): ClientNode | null {
  if (!root || code === ROOT_CODE) return null;

  if (root.left_child?.code === code || root.right_child?.code === code)
    return root;

  const left = getParentTreeNode(root.left_child, code);
  if (left) return left;
  const right = getParentTreeNode(root.right_child, code);
  return right;
}

export function getSubtree(
  root?: ClientNode | null,
  levels: number = 4
): TreeNode | null {
  if (!root || levels < 0) return null;

  const left = getSubtree(root.left_child, levels - 1);
  const right = getSubtree(root.right_child, levels - 1);

  const children = [];
  if (left) children.push(left);
  if (right) children.push(right);

  return {
    name: root.name,
    attributes: {
      code: root.code,
      introducer_code: root.introducer_code,
      registration_date: root.registration_date?.toISOString(),
    },
    ...(children.length === 0 ? {} : { children }),
  };
}

export function getAllNodes(root?: ClientNode) {
  if (!root) return [];
  const result: Client[] = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop()!;
    result.push({
      code: current.code,
      name: current.name,
      introducer_code: current.introducer_code,
      registration_date: current.registration_date,
    }); // Collect the current node's value

    if (current.left_child) {
      stack.push(current.left_child);
    }
    if (current.right_child) {
      stack.push(current.right_child);
    }
  }
  return result;
}
