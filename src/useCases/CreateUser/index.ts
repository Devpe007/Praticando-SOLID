import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";

import { CreateUserUseCase } from "./CreateUserUseCase";

import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    mailtrapMailProvider,
); 

const createUserController = new CreateUserController(
    createUserUseCase,
);

export { createUserUseCase, createUserController }