import winston from 'winston';
const winstonDaily = require('winston-daily-rotate-file');
const logDir = 'logs';

const transports = [];
if(process.env.NODE_ENV !== 'development') {
    transports.push(
        new winston.transports.Console()
    )
    transports.push(
        new winstonDaily({
            level: 'warn',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir+ '/warn',
            filename: `%DATE%.warn.log`, // file 이름 날짜로 저장
            maxFiles: 30,  // 30일치 로그 파일 저장
            zippedArchive: true,
        })
    )
    transports.push(
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir + '/error',  // error.log 파일은 /logs/error 하위에 저장
            filename: `%DATE%.error.log`,
            maxFiles: 30,
            zippedArchive: true,
        })
    )
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
            )
        })
    )
}

const LoggerInstance = winston.createLogger({
    level: 'debug',
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    transports
});

LoggerInstance.stream({
    write: (message: string) => {
        LoggerInstance.info(message)
    }
})
export default LoggerInstance;
