import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '../dtos/IFindAllProvidersDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
    findAllProviders({ except_user_id }: IFindAllProvidersDTO): Promise<User[]>;
    findByID: (id: string) => Promise<User | undefined>;
    findByEmail: (email: string) => Promise<User | undefined>;
    create: (user: ICreateUserDTO) => Promise<User>;
    save: (user: User) => Promise<User>;
}
