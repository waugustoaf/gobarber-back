import { AuthenticateUserService } from '@modules/users/services/AuthenticateUserService';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class SessionsController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email, password } = request.body;

        const authenticateUser = container.resolve(AuthenticateUserService);
        const { user, token } = await authenticateUser.execute({
            email,
            password,
        });

        // @ts-ignore: Unreachable code error
        delete user.password;

        return response.json({ user: classToClass(user), token });
    }
}
