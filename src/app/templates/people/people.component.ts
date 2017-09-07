import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorStateManagerService } from '../../services/error-state-manager.service';
import { ResponseStateManagerService } from '../../services/response-state-manager.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  swapiData = {};
  peopleList:Object = {};
  isError:boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private errorStateManager: ErrorStateManagerService,
    private responseStateManager: ResponseStateManagerService
  ) {
    /**
     * Subscribing to data response event.
     */
    this.responseStateManager.responseState['peopleRes'].subscribe(res=>{
      this.swapiData = res;
      this.setPeopleResult();
    });
   }

  ngOnInit() {
    //Setting firs time data.
    this.swapiData = this.responseStateManager.getState()['peopleRes'];
    //Listening to any error event.
    this.isError = this.errorStateManager.isError || this.isError;
    
    //Pushing data to view.
    this.setPeopleResult();   
  }

  /**
   * If there is no error set data to peopleList
   * 
   * @memberof PeopleComponent
   */
  setPeopleResult():void{
    if(!this.isError && this.swapiData){
      this.peopleList = this.swapiData['results'];
    }
  }

}
