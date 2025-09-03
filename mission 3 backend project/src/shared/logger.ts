import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const infoLogger = createLogger({
  level: 'info',
  format: combine(label({ label: 'right now!' }), timestamp(), myFormat),
  transports: [
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'day-%DATE%-success.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'right now!' }), timestamp(), myFormat),
  transports: [
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'day-%DATE%-error.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

// If we're not in production then log to the `console` with the format:
// `${infolevel}: ${infomessage} JSONstringify({ rest }) `

if (process.env.NODE_ENV !== 'production') {
  infoLogger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
  errorLogger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}

export { infoLogger, errorLogger };
