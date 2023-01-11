import { AddRouter } from "./functions/add_route";
import { DeleteRouter } from "./functions/delete_route";
import { GetRouter } from "./functions/get_route";
import { Router } from "./ports/router";

export interface Env {
	KV_DB: KVNamespace;
}

const routes: { [key: string]: Router } = {
	POST: new AddRouter(),
	GET: new GetRouter(),
	DELETE: new DeleteRouter()
};

export default {
	async fetch(
		request: Request,
		env: Env
	): Promise<Response> {
		return routes[request.method].handle(request, env.KV_DB);
	},
};
