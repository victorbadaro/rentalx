interface IMailVariables {
  name: string;
  link: string;
}

interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    variables: IMailVariables,
    path: string
  ): Promise<void>;
}

export { IMailProvider, IMailVariables };
