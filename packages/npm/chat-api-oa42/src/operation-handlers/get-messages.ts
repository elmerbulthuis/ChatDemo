import * as common from "chat-api-common";
import * as commonOa42 from "chat-common-oa42";

export function getMessages(
  context: common.application.Context,
): commonOa42.GetMessagesOperationHandler<{}> {
  return async (incomingRequest, authentication, accept) => {
    const messages = context.messageService.getMessages();
    return {
      status: 200,
      parameters: {},
      contentType: "application/json",
      entity() {
        return {
          values: messages,
        };
      },
    };
  };
}
