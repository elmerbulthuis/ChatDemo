import * as common from "chat-api-common";
import * as commonOa42 from "chat-common-oa42";

export function newMessage(
  context: common.application.Context,
): commonOa42.NewMessageOperationHandler<{}> {
  return async (incomingRequest, authentication, accept) => {
    const entity = await incomingRequest.entity();
    context.messageService.newMessage(entity.value);
    return {
      status: 201,
      parameters: {},
      contentType: null,
    };
  };
}
