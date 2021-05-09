import fs from 'fs';
import path from 'path';
import aws, { S3 } from 'aws-sdk';
import uploadConfig from '@config/upload';
import mime from 'mime-types';
import IStorageProvider from '../models/IStorageProvider';

export default class S3StorageProvider implements IStorageProvider {
    private client: S3;

    constructor() {
        this.client = new aws.S3({
            region: 'us-east-2',
        });
    }

    public async saveFile(file: string): Promise<string> {
        const originalPath = path.resolve(uploadConfig.tmpFolder, file);

        const contentType = mime.lookup(originalPath);

        if (!contentType) {
            throw new Error('File not found');
        }

        const fileContent = await fs.promises.readFile(originalPath);

        await this.client
            .putObject({
                Bucket: uploadConfig.config.aws.bucket,
                Key: file,
                ACL: 'public-read',
                Body: fileContent,
                ContentType: contentType,
            })
            .promise();

        await fs.promises.unlink(originalPath);

        return file;
    }

    public async deleteFile(file: string): Promise<void> {
        await this.client
            .deleteObject({
                Bucket: uploadConfig.config.aws.bucket,
                Key: file,
            })
            .promise();
    }
}
