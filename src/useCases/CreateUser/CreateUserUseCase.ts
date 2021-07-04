import { User } from '../../entities/User';

import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: void,
    ) {};
};