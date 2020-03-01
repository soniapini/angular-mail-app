import {Injectable} from '@angular/core';

export interface ILogger {
  log(log: string);

  debug(log: string);

  info(log: string);
}

@Injectable()
export class Logger implements ILogger {
  log(log: string) {
    console.log(log);
  }

  debug(log: string) {
    console.debug(log);
  }

  info(log: string) {
    console.info(log);
  }
}

export class LoggerImplService implements ILogger {
  debug(log: string) {
    console.log(log);
  }

  info(log: string) {
  }

  log(log: string) {
  }

}

