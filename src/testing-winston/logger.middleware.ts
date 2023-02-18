import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * Logger service is logger's middleware configuration
 */
@Injectable()
export class LoggerService implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  /**
   * @description This callback function used to handle logger output
   */
  use(request: Request, response: Response, next: NextFunction) {
    response.on('finish', () => {
      const { method, originalUrl } = request;
      const { statusCode, statusMessage } = response;

      const message = `${method} ${originalUrl} ${statusCode} ${statusMessage}`;

      if (statusCode >= 500) {
        return this.logger.error(message);
      }

      if (statusCode >= 400) {
        return this.logger.warn(message);
      }

      return this.logger.log(message);
    });

    next();
  }
}
