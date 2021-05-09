import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import 'reflect-metadata';
import { ListProvidersService } from './ListProvidersService';

let fakeUsersRepository: IUsersRepository;
let listProvider: ListProvidersService;
let fakeCacheProvider: FakeCacheProvider;

describe('UpdateProfile', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeCacheProvider = new FakeCacheProvider();
        listProvider = new ListProvidersService(
            fakeUsersRepository,
            fakeCacheProvider,
        );
    });

    it('should be able to list the providers', async () => {
        const user_1 = await fakeUsersRepository.create({
            email: 'johndoe@example.com',
            name: 'John Doe',
            password: '123456',
        });

        const user_2 = await fakeUsersRepository.create({
            email: 'johntre@example.com',
            name: 'John Trê',
            password: '123456',
        });

        const loggedUser = await fakeUsersRepository.create({
            email: 'johnqua@example.com',
            name: 'John Qua',
            password: '123456',
        });

        const providers = await listProvider.execute({
            user_id: loggedUser.id,
        });

        expect(providers).toEqual([user_1, user_2]);
    });
});
