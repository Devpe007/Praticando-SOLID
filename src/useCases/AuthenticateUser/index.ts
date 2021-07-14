import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

import { AuthenticateUserController } from "./AuthenticateUserController";

const authenticateUserUseCase = new AuthenticateUserUseCase();

const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase,
);

export { authenticateUserController };