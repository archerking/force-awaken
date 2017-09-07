import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class ErrorStateManagerService {
  @Output() ErrorEvent: EventEmitter<any>;
  public isError:boolean = false;
  private errorObject: Object = {isError:true};

  constructor() {
    this.ErrorEvent = new EventEmitter();
  }

  setError(error:any):void{
    console.log(error);
    this.isError = true;
    this.errorObject['errorBody'] = error; 
    this.ErrorEvent.emit(this.errorObject);
  }
}
