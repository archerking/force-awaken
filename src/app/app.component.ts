import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EditUpdateManagerService } from './services/edit-update-manager.service';
import { DynamicComponentManagerService } from './services/dynamic-component-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('EditPopupPlaceHolder', {read: ViewContainerRef}) _vcr_EditPlaceholder;
  private ComponentFactory:Object = {};

  constructor(
    private editUpdateManager: EditUpdateManagerService,
    private componentManager: DynamicComponentManagerService
  ){}

  ngOnInit(){
    /**
     * On 'edit' button click dynamically injecting edit people component.
     */
    this.editUpdateManager.editId.subscribe(res=>{
      this.ComponentFactory = this.componentManager.ResolveComponent(this._vcr_EditPlaceholder, 'EditPeopleComponent', this.editUpdateManager.editPeople);
    });
  }
}
