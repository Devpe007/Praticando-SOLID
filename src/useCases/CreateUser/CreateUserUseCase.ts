import { User } from '../../entities/User';

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IMailProvider } from '../../providers/IMailProvider';

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ) {};
};