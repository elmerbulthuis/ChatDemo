import * as common from "chat-api-common";
import * as http from "http";
import * as yargs from "yargs";
import * as application from "../application/index.js";

export function registerServerProgram(argv: yargs.Argv) {
  return argv.command(
    "server",
    "Start chat-api-oa42 server",
    (yargs) =>
      yargs.option("port", {
        description: "Port to start the server on",
        type: "number",
        default: 50051,
      }),
    (argv) => main(argv as MainConfiguration),
  );
}

interface MainConfiguration {
  port: number;
}

async function main(configuration: MainConfiguration) {
  const { port } = configuration;

  console.info("Starting server...");

  const context = new common.application.Context();

  const server = application.createApplicationServer(context);

  const httpServer = http.createServer();
  const onRequest = server.asHttpRequestListener();
  httpServer.addListener("request", onRequest);

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.info("Server started");
  try {
    await new Promise<void>((resolve) => {
      const abort = () => {
        process.removeListener("SIGINT", abort);
        process.removeListener("SIGTERM", abort);

        resolve();
      };
      process.addListener("SIGINT", abort);
      process.addListener("SIGTERM", abort);
    });

    console.info("Stopping server...");
  } finally {
    httpServer.removeListener("request", onRequest);

    httpServer.closeAllConnections();

    await new Promise<void>((resolve, reject) =>
      httpServer.close((error) => (error == null ? resolve() : reject(error))),
    );
  }

  console.info("Server stopped");
}
