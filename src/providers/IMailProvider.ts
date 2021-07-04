export interface IAddress {
    email: string;
    name: string;
};

export interface IMassage {
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
};

export interface IMailProvider {
    sendMail(message: IMassage): Promise<void>
};