import { getCustomRepository } from "typeorm";

import { UserRepository } from "../../../repositories/UserRespository";
import { ICreateUserRequestDTO } from "../../../useCases/CreateUser/CreateUserDTO";

import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

export class AuthenticateUserService {
    async execute(data: ICreateUserRequestDTO) {
        const userRepository = getCustomRepository(UserRepository);

        const usersAlreadyExists = await userRepository.findOne({
            email: data.email,
        });

        if(!usersAlreadyExists) {
            throw new Error('Email/Password incorrect');
        };

        const passwordMath = await compare(data.password, usersAlreadyExists.password);

        if(!passwordMath) {
            throw new Error('Email/Password incorrect');
        };

        const token = sign({
            email: usersAlreadyExists.email,
        }, '4018ba61-e707-4d90-82cc-debbbc245de8', {
            subject: usersAlreadyExists.id,
            expiresIn: "7d",
        });
        
        return token;
    };
};