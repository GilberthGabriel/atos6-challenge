export interface Router {
  handle(request: Request, db: KVNamespace): Promise<Response>;
}