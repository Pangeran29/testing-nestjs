import { utilities } from "nest-winston";
import { createLogger, format, transports } from "winston";

export const instance = createLogger({
  // options of Winston
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [
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