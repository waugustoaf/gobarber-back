import handlebars from 'handlebars';

import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

export class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
    public async parse({
        template,
        variables,
    }: IParseMailTemplateDTO): Promise<string> {
        const parseTemplate = handlebars.compile(template);

        return parseTemplate(variables);
    }
}
