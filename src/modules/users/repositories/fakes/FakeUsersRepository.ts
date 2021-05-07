import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { v4 as uuid } from 'uuid';

class FakeUsersRepository implements IUsersRepository {
    private users: User[] = [];

    public async findByID(id: string): Promise<User | undefined> {
        const findUser = this.users.find((user) => user.id === id);

        return findUser;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const findUser = this.users.find((user) => user.email === email);

        return findUser;
    }

    public async create(userData: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, { id: uuid() }, userData);

        this.users.push(user);

        return user;
    }

    public async save(user: User): Promise<User> {
        const findUserIndex = this.users.findIndex(
            (currentUser) => currentUser.id === user.id,
        );

        this.users[findUserIndex] = user;

        return user;
    }

    public async findAllProviders({
        except_user_id,
    }: IFindAllProvidersDTO): Promise<User[]> {
        if (except_user_id) {
            return this.users.filter((user) => user.id !== except_user_id);
        }

        return this.users;
    }
}

export default FakeUsersRepository;
