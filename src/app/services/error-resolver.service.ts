import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class ErrorResolverService implements ErrorHandler {

  constructor() { }

  handleError(error:any){
    /**
     * TODO: Further refactoring required for error handling. Can send logs to server.
     */
    console.error(error.message);
  }

}
