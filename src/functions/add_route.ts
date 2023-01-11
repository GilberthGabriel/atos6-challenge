import { Router } from "../ports/router";
import { map_request } from "../utils/map_request";
import { bad_request, ok } from "../utils/responses";

export class AddRouter implements Router {
  async handle(request: Request, db: KVNamespace): Promise<Response> {
    const reqJson = await map_request<{ url: string }>(request);
    if (!reqJson?.body?.url) return bad_request('Url is required');
    db.put(reqJson.pathname, reqJson.body.url);
    return ok<{ status: string, message: string }>({ status: 'Success', message: 'Url saved' });
  }
}