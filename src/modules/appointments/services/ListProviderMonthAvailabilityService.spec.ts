import 'reflect-metadata';
import FakeAppointmentsRepository from '../infra/typeorm/repositories/fakes/FakeAppointmentsRepository';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import { ListProviderMonthAvailabilityService } from './ListProviderMonthAvailabilityService';

let listProviderMonthAvailabilityService: ListProviderMonthAvailabilityService;
let fakeAppointmentsRepository: IAppointmentsRepository;

describe('ListProviderMonthAvailability', () => {
    beforeEach(() => {
        fakeAppointmentsRepository = new FakeAppointmentsRepository();
        listProviderMonthAvailabilityService = new ListProviderMonthAvailabilityService(
            fakeAppointmentsRepository,
        );
    });

    it('should be able to list the month availability from provider', async () => {
        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 8, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 9, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 10, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 11, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 12, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 13, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 14, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 15, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 16, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 10, 17, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            user_id: '123123',
            date: new Date(2021, 4, 11, 8, 0, 0),
        });

        const availability = await listProviderMonthAvailabilityService.execute(
            {
                provider_id: 'user',
                year: 2021,
                month: 5,
            },
        );

        expect(availability).toEqual(
            expect.arrayContaining([
                { day: 9, available: true },
                { day: 10, available: false },
                { day: 11, available: true },
                { day: 12, available: true },
            ]),
        );
    });
});
