import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

@Injectable()
export class EditUpdateManagerService {
  public editId = new Subject();
  private _idToEdit:any = '';
  constructor() { 
  }

  set editPeople(id:any){
    this._idToEdit = id;
    this.editId.next(id);    
  }

  get editPeople(){
    return this._idToEdit;
  }
}
