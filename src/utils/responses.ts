export function ok<T>(body: T): Response {
  const response = new Response(JSON.stringify(body));
  response.headers.set("Content-Type", "application/json");
  return response;
}

export function bad_request(message: string): Response {
  const response = new Response(JSON.stringify({ status: "error", message }), { status: 400 });
  response.headers.set("Content-Type", "application/json");
  return response;
}

export function not_found(message: string): Response {
  const response = new Response(JSON.stringify({ status: "error", message }), { status: 404 });
  response.headers.set("Content-Type", "application/json");
  return response;
}