import * as commonOa42 from "chat-common-oa42";
import immutable from "immutable";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ChatModel } from "../forms/index.js";

const componentName = "app-oa42-route";
export { Component as oa42Route };

const baseUrl = new URL("http://localhost:50050");

@customElement(componentName)
class Component extends LitElement {
  @state()
  accessor messages = immutable.List<string>([]);

  render() {
    return html`
      <h1>OpenApi42</h1>
      <p>OpenApi42 backend</p>
      <p>
        <app-chat-part
          .messageList=${this.messages}
          @chat-model=${this.onChatModelChatPart}
        ></app-chat-part>
      </p>
    `;
  }

  private controller!: AbortController;

  connectedCallback(): void {
    this.controller = new AbortController();

    const { signal } = this.controller;

    (async () => {
      const result = await commonOa42.messageEvents(
        {
          contentType: null,
          parameters: {},
        },
        {},
        { baseUrl },
      );

      for await (const event of result.entities(signal)) {
        switch (event.type) {
          case "messages-snapshot": {
            this.messages = immutable.List(event.messages);
            break;
          }

          case "new-message": {
            this.messages = this.messages.push(event.message);
            break;
          }
        }
      }
    })();

    super.connectedCallback();
  }

  disconnectedCallback(): void {
    this.controller.abort();

    super.disconnectedCallback();
  }

  private onChatModelChatPart = (event: CustomEvent) => {
    const model = event.detail as ChatModel;

    (async () => {
      const response = await commonOa42.newMessage(
        {
          contentType: "application/json",
          entity: () => ({
            value: model.message,
          }),
          parameters: {},
        },
        {},
        { baseUrl },
      );
    })();
  };
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: Component;
  }
}
