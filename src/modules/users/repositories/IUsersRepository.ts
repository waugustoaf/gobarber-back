import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
    findByID: (id: string) => Promise<User | undefined>;
    findByEmail: (email: string) => Promise<User | undefined>;
    create: (user: ICreateUserDTO) => Promise<User>;
    save: (user: User) => Promise<User>;
}
