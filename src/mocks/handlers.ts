import { http, HttpResponse } from "msw";
import root from "../data/mockClients";
import { getAllNodes, getParentTreeNode, getTreeNode } from "../utils/tree";

export const handlers = [
  // An example handler
  http.get("/api/policyholders", async ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");

    if (!code) {
      return HttpResponse.json({ error: "Missing search parameters 'code'" });
    }

    const rootNode = getTreeNode(root, code);
    if (!rootNode) {
      return HttpResponse.json({ error: "Not found!!!" });
    }

    return HttpResponse.json({
      code: rootNode.code,
      name: rootNode.name,
      introducer_code: rootNode.introducer_code,
      registration_date: rootNode.registration_date,
      l: getAllNodes(rootNode.left_child),
      r: getAllNodes(rootNode.right_child),
    });
  }),

  // An example handler
  http.get("/api/policyholders/:code/top", async ({ params }) => {
    const code = params.code;

    if (typeof code !== "string") {
      return HttpResponse.json({ error: "Invalid url parameter type 'code'" });
    }

    const parentNode = getParentTreeNode(root, code);
    if (!parentNode) {
      return HttpResponse.json({ error: "Not found!!!" });
    }

    return HttpResponse.json({
      code: parentNode.code,
      name: parentNode.name,
      introducer_code: parentNode.introducer_code,
      registration_date: parentNode.registration_date,
      l: getAllNodes(parentNode.left_child),
      r: getAllNodes(parentNode.right_child),
    });
  }),
];
