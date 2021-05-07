import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailability = new ProviderMonthAvailabilityController();
const providerDayAvailability = new ProviderDayAvailabilityController();

// Rota: Receber a requisição, chamar outro arquivo, devolver a resposta
providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
    '/:provider_id/month-availability',
    providerMonthAvailability.index,
);
providersRouter.get(
    '/:provider_id/day-availability',
    providerDayAvailability.index,
);

export default providersRouter;
