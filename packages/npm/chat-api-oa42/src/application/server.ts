import * as common from "chat-api-common";
import * as commonOa42 from "chat-common-oa42";
import * as operationHandlers from "../operation-handlers/index.js";

export type Server = commonOa42.Server;

export function createApplicationServer(context: common.application.Context) {
  const server = new commonOa42.Server();

  //categories

  server.registerGetMessagesOperation(operationHandlers.getMessages(context));
  server.registerNewMessageOperation(operationHandlers.newMessage(context));
  server.registerMessageEventsOperation(operationHandlers.messageEvents(context));

  // middleware!

  server.registerMiddleware(commonOa42.createErrorMiddleware());
  server.registerMiddleware(
    commonOa42.createCorsMiddleware({
      maxAge: 50000,
      allowOrigin: "*",
    }),
  );

  return server;
}
