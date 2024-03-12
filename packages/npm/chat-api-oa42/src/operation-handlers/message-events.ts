import assert from "assert";
import * as common from "chat-api-common";
import * as commonOa42 from "chat-common-oa42";

export function messageEvents(
  context: common.application.Context,
): commonOa42.MessageEventsOperationHandler<{}> {
  return async (incomingRequest, authentication, accept) => {
    return {
      status: 200,
      parameters: {},
      contentType: "application/json",
      async *entities(signal) {
        assert(signal != null);

        for await (const event of context.messageService.subscribeMessages(signal)) {
          switch (event.type) {
            case "message-snapshot": {
              yield {
                type: "messages-snapshot",
                messages: event.messages,
              };
              break;
            }
            case "message-add": {
              yield {
                type: "new-message",
                message: event.message,
              };
              break;
            }
          }
        }
      },
    };
  };
}
