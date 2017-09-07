import { Injectable } from '@angular/core';
import { EditFormBase } from './edit-form-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class SetFormOptionsService {
  formOptions: EditFormBase<any>[] = [];
  constructor() { }

  setOptions(formOption:EditFormBase<any>[]){
    let group: any = {};

    formOption.forEach(v=>{
      group[v.key] = new FormControl(v.value);
    });

    return group;
  }
}
