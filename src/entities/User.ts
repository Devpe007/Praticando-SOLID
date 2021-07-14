import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ICreateUserRequestDTO } from '../useCases/CreateUser/CreateUserDTO';

@Entity('users')
export class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(props: ICreateUserRequestDTO) {
        if(!this.id) {
            this.id = uuid();
        };
    };
};