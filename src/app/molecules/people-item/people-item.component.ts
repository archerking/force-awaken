import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditUpdateManagerService } from '../../services/edit-update-manager.service';
@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {
  @Input() items:any = {};

  constructor(
    private editUpdateManager: EditUpdateManagerService
  ) { }

  ngOnInit() {
    console.log(this.items)
  }

  /**
   * Setting peple id to observable object via editUpdateManager service.
   * 
   * @private
   * @param {*} id 
   * @memberof PeopleItemComponent
   */
  private editPeople(id:any):void{
    this.editUpdateManager.editPeople=id;
  }

  /**
   * Extracting last param of the url, which is is people id.
   * 
   * @private
   * @param {string} url 
   * @returns {*} 
   * @memberof PeopleItemComponent
   */
  private getPeopleId(url:string):any{
    let values:Array<any> = url.split('/');
    return values[values.length-2];
  }
}
