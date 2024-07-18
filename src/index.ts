import buildJwks from "get-jwks";

buildJwks({ providerDiscovery: true });

const handler: ExportedHandler<Env> = {
  async fetch(request, env, ctx): Promise<Response> {
    return new Response("Hello World!");
  },
};

export default handler;
