import { getCustomRepository } from 'typeorm';

import { hash } from 'bcryptjs';

import { IMailProvider } from '../../providers/IMailProvider';
import { ICreateUserRequestDTO } from './CreateUserDTO';

import { UserRepository } from '../../repositories/UserRespository';

export class CreateUserUseCase {
    constructor(
        private mailProvider: IMailProvider,
    ) {};

    async execute(data: ICreateUserRequestDTO) {
        const usersRepository = getCustomRepository(UserRepository);

        const userAlreadyExists = await usersRepository.findOne({
            email: data.email,
        });

        if(userAlreadyExists) {
            throw new Error ('User already exists');
        };

        const passwordHash = await hash(data.password, 8);

        const user = usersRepository.create({
            name: data.name,
            email: data.email,
            password: passwordHash,
        });;

        await usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe de registro',
                email: 'registro@meuapp.com',
            },
            subject: 'Bem vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        });
    };
};