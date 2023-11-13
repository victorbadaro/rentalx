import { IMailProvider, IMailVariables } from "../IMailProvider";

interface IMessage {
  to: string;
  subject: string;
  variables: IMailVariables;
  path: string;
}

class MailProviderInMemory implements IMailProvider {
  private messages: IMessage[] = [];

  async sendMail(
    to: string,
    subject: string,
    variables: IMailVariables,
    path: string
  ): Promise<void> {
    this.messages.push({
      to,
      subject,
      variables,
      path
    });
  }
}

export { MailProviderInMemory };
