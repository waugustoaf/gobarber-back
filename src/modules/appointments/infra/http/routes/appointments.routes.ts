import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const listProviderAppointments = new ProviderAppointmentsController();

// Rota: Receber a requisição, chamar outro arquivo, devolver a resposta
appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = new AppointmentsRepository();
    const appointments = await appointmentsRepository.find();
    return response.json(appointments);
});

appointmentsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            provider_id: Joi.string().uuid().required(),
            date: Joi.date(),
        },
    }),
    appointmentsController.create,
);

appointmentsRouter.get('/me', listProviderAppointments.index);

export default appointmentsRouter;
