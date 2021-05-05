import { AppError } from '@shared/errors/AppError';
import 'reflect-metadata';
import FakeAppointmentsRepository from '../infra/typeorm/repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
    it('should be able to create a new appointment', async () => {
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        const createAppointment = new CreateAppointmentService(
            fakeAppointmentsRepository,
        );

        const appointment = await createAppointment.execute({
            date: new Date(),
            provider_id: '12345678987654321',
        });

        expect(appointment).toHaveProperty('id');
        expect(appointment.provider_id).toBe('12345678987654321');
    });

    it('should not be able to create two appointments on the same time', async () => {
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        const createAppointment = new CreateAppointmentService(
            fakeAppointmentsRepository,
        );

        const appointmentDate = new Date(2021, 4, 10, 12);

        await createAppointment.execute({
            date: appointmentDate,
            provider_id: '12345678987654321',
        });
        expect(
            createAppointment.execute({
                date: appointmentDate,
                provider_id: '12345678987654321',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
