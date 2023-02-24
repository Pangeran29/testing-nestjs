import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";
import { ConfigService } from "@nestjs/config";
import { utilities } from "nest-winston";
import { createLogger, format, transports } from "winston";

const configService = new ConfigService();
const logTailSecret = new Logtail(configService.get<string>('LOGTAIL_TOKEN'));

/**
 * @description
 * Winston configuration
 * - config for winston internal logger
 * - config for logger logtail   
 */
export const instance = createLogger({
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [
    new LogtailTransport(logTailSecret),
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.ms(),
        utilities.format.nestLike('MyApp', {
          // options
          colors: true 
        }),
      ),
    }),
  ],
});