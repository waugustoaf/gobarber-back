import { inject, injectable } from 'tsyringe';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import { AppError } from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';

interface IRequest {
    email: string;
}

@injectable()
export class SendForgotPasswordEmailService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('MailProvider')
        private mailProvider: IMailProvider,

        @inject('UserTokensRepository')
        private userTokensRepository: IUserTokensRepository,
    ) {}

    public async execute({ email }: IRequest): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('User does not exists');
        }

        const userToken = await this.userTokensRepository.generate(user.id);

        await this.mailProvider.sendMail({
            to: { name: user.name, email: user.email },
            subject: '[GoBarber] Recuperação de senha',
            templateData: {
                template: 'Olá, {{name}}! Seu token é: {{token}}',
                variables: { name: user.name, token: userToken.token },
            },
        });
    }
}
