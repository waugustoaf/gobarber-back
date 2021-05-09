import { AppError } from '@shared/errors/AppError';
import 'reflect-metadata';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import IUsersRepository from '../repositories/IUsersRepository';
import { AuthenticateUserService } from './AuthenticateUserService';

let fakeUsersRepository: IUsersRepository;
let fakeHashProvider: IHashProvider;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();
        authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );
    });

    it('should be able to authenticate', async () => {
        authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );

        const user = await fakeUsersRepository.create({
            email: 'johndoe@example.com',
            name: 'John Doe',
            password: '123456',
        });

        const response = await authenticateUser.execute({
            email: 'johndoe@example.com',
            password: '123456',
        });

        expect(response).toHaveProperty('token');
        expect(response.user).toBe(user);
    });

    it('should not be able to authenticate non existing existing user', async () => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();
        authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );

        expect(
            authenticateUser.execute({
                email: 'johndoe@example.com',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to authenticate non existing existing user', async () => {
        await fakeUsersRepository.create({
            email: 'johndoe@example.com',
            name: 'John Doe',
            password: '123456',
        });

        expect(
            authenticateUser.execute({
                email: 'johndoe@example.com',
                password: 'wrong-password',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
