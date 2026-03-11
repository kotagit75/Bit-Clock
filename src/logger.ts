import moment from "moment";
import { styleText, type InspectColor } from "util";

type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR'
type LogDomain = 'SYS' | 'API' | 'P2P' | 'NODE'

const levelToColor = (level: LogLevel): InspectColor => {
    var color: InspectColor = "white"
    switch(level) {
        case 'DEBUG': color = "green"; break;
        case 'INFO': color = "blueBright"; break;
        case 'WARN': color = "yellow"; break;
        case 'ERROR': color = "red"; break;
    }
    return color
}

const levelToNumber = (level: LogLevel): number => {
    switch (level) {
        case 'DEBUG': return 0
        case 'INFO': return 1
        case 'WARN': return 2
        case 'ERROR': return 3
    }
}

class Logger {

    constructor(private minShowLogLevel: LogLevel){}

    private log(level: LogLevel, domain: LogDomain, ...data: any[]) {
        const timestamp = moment().format("YYYY-MM-DD HH:mm:ss")
        const content = data.map((v) => v.toString()).join(" ")
        const logOutput = `${timestamp} | ${domain.padEnd(4, " ")} | ${styleText(levelToColor(level), level.padEnd(5, " "))} | ${content}`

        if(levelToNumber(level) < levelToNumber(this.minShowLogLevel)) {
            return
        }
        switch (level) {
            case 'DEBUG': console.debug(logOutput); break;
            case 'INFO': console.info(logOutput); break;
            case 'WARN': console.warn(logOutput); break;
            case 'ERROR': console.error(logOutput); break;
        }
    }

    debug(domain: LogDomain, ...data: any[]) { this.log('DEBUG', domain, ...data); }
    info(domain: LogDomain, ...data: any[]) { this.log('INFO', domain, ...data); }
    warn(domain: LogDomain, ...data: any[]) { this.log('WARN', domain, ...data); }
    error(domain: LogDomain, ...data: any[]) { this.log('ERROR', domain, ...data); }
}

export const logger = new Logger("INFO");