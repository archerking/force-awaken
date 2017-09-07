import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class ResponseStateManagerService {
  @Output()responseState = {};
  private _response:Object = {};
  
  
  constructor(){
    this.responseState['peopleRes'] = new EventEmitter();
  }

  public getState():Object{
    return this._response;
  }

  public setState(res:Object, resName:string){
    this._response[resName] = res;
    this.responseState[resName].emit(this._response[resName]);
  }

}
