export interface Client {
  code: string;
  name: string;
  registration_date?: Date;
  introducer_code: string;
}

export interface ClientNode extends Client {
  left_child?: ClientNode;
  right_child?: ClientNode;
}

export interface TreeNode {
  name: string;
  attributes?: Record<string, any>;
  children?: TreeNode[];
}
