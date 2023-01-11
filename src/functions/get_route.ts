import { Router } from "../ports/router";
import { not_found } from "../utils/responses";

export class GetRouter implements Router {
  async handle(request: Request, db: KVNamespace): Promise<Response> {
    const { pathname } = new URL(request.url);
    const data = await db.get(pathname);
    if (data) return Response.redirect(data);
    return not_found('url not found');
  }
}