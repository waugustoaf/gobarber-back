import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

export class FakeMailTemplateProvider implements IMailTemplateProvider {
    public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
        return template;
    }
}
