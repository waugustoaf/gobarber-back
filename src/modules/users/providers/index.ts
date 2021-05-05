import { container } from 'tsyringe';

import BCryptHashProvider from './HashProvider/implementations/BCryptHasProvider';
import IHashProvider from './HashProvider/models/IHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
