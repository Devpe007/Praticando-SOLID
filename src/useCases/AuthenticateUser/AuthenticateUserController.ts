import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
    constructor(
        private authenticateUserUseCase: AuthenticateUserUseCase,
    ) {};

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        try {
            const token = await this.authenticateUserUseCase.execute({
                email,
                password,
            });

            return response.json(token);
        } catch(error) {
            return response.status(401).json({
                message: error.message,
            });
        };
    };
};