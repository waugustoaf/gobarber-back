import { AppError } from '@shared/errors/AppError';
import 'reflect-metadata';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import IUsersRepository from '../repositories/IUsersRepository';
import { ShowProfileService } from './ShowProfileService';

let fakeUsersRepository: IUsersRepository;
let showProfile: ShowProfileService;

describe('UpdateProfile', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        showProfile = new ShowProfileService(fakeUsersRepository);
    });

    it('should be able to show the profile', async () => {
        const { id: user_id } = await fakeUsersRepository.create({
            email: 'johndoe@example.com',
            name: 'John Doe',
            password: '123456',
        });

        const updatedUser = await showProfile.execute({
            user_id,
        });

        expect(updatedUser.name).toBe('John Doe');
        expect(updatedUser.email).toBe('johndoe@example.com');
    });

    it('should not be able to show an unknown user profile', async () => {
        await expect(
            showProfile.execute({
                user_id: 'wrong-user-id',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
