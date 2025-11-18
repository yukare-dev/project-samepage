const HARDCOVER_API_URL = "https://api.hardcover.app/v1/graphql";
const API_KEY = process.env.HARDCOVER_API_KEY;

console.log(
  "HARDCOVER_API_KEY lido no servidor:",
  API_KEY ? "Chave Carregada" : "ERRO: Chave VAZIA"
);

export async function POST(request: Request) {
  if (!API_KEY) {
    return new Response(
      JSON.stringify({
        error: "API Key is missing from environment variables.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(HARDCOVER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const newHeaders = new Headers(response.headers);

    newHeaders.delete("content-encoding");
    newHeaders.delete("content-length");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  } catch (error) {
    console.log("Falha ao processar requisição proxy:", error);
    return new Response(JSON.stringify({ error: new Error(error as any) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  return new Response("GraphQL Proxy is ready to receive POST requests.", {
    status: 200,
  });
}
