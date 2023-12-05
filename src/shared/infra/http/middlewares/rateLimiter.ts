import { NextFunction, Request, Response } from "express";
import { Redis } from "ioredis";
import { RateLimiterRedis } from "rate-limiter-flexible";

import { AppError } from "@shared/errors/AppError";

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  enableOfflineQueue: false
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "middleware",
  points: 10, // 10 requests
  duration: 5 // per 5 seconds by IP
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    await limiter.consume(request.ip);

    return next();
  } catch (error) {
    throw new AppError("Too many requests", 429);
  }
}
