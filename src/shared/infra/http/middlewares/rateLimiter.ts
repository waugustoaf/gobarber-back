import { Request, Response, NextFunction } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import redis from 'redis';
import { AppError } from '@shared/errors/AppError';

const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASS || undefined,
});

const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'ratelimit',
    points: 5,
    duration: 1,
});

export const rateLimiter = async (
    request: Request,
    response: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        await limiter.consume(request.ip);

        return next();
    } catch (error) {
        throw new AppError('Too many requests', 429);
    }
};