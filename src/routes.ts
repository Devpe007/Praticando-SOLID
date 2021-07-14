import { Router } from 'express';

import { createUserController } from './useCases/CreateUser';
import { authenticateUserController } from './useCases/AuthenticateUser';

const routes = Router();

routes.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

routes.post('/login', (request, response) => {
    return authenticateUserController.handle(request, response);
});

export { routes };