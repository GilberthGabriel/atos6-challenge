import { RequestJson } from "../ports/request";

const body_methods = ["POST", "PUT", "PATCH"];

export async function map_request<T>(request: Request): Promise<RequestJson<T>> {
  const reqJson = body_methods.includes(request.method) ? await request.json<T>() : undefined;
  const { pathname } = new URL(request.url);
  return {
    body: reqJson,
    pathname
  };
}