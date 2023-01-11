import { Router } from "../ports/router";
import { map_request } from "../utils/map_request";
import { ok } from "../utils/responses";

export class DeleteRouter implements Router {
  async handle(request: Request, db: KVNamespace): Promise<Response> {
    const reqJson = await map_request<{ url: string }>(request);
    await db.delete(reqJson.pathname);
    return ok<{ status: string, message: string }>({ status: 'Success', message: 'Url deleted' });
  }
}