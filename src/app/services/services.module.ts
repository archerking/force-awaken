import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from 'ng2-swapi';
import { ErrorStateManagerService } from './error-state-manager.service';
import { GetSwapiService } from './get-swapi.service';
import { GetDataService } from './get-data.service';
import { ResponseStateManagerService } from './response-state-manager.service';
import { EditUpdateManagerService } from './edit-update-manager.service';
import { DynamicComponentManagerService } from './dynamic-component-manager.service';
import { SetFormOptionsService } from './set-form-options.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    GetSwapiService,
    GetDataService,
    SwapiService,
    ErrorStateManagerService,
    ResponseStateManagerService,
    EditUpdateManagerService,
    DynamicComponentManagerService,
    SetFormOptionsService
  ]
})
export class ServicesModule { }
