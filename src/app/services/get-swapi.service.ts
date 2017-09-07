import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SwapiService } from 'ng2-swapi';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetSwapiService {
  
  constructor(
    private swapi?: SwapiService
  ) { }

  /**
   * Get people list from swapi.
   * 
   * @param {*} [page=null] 
   * @returns {*} 
   * @memberof GetSwapiService
   */
  getPeople(page:any=null):any{
    return this.swapi.getPeople(page);
  }

  /**
   * Get swapi person details.
   * 
   * @param {number} id 
   * @returns 
   * @memberof GetSwapiService
   */
  getPerson(id:number){
    return this.swapi.getPerson(id);
  }
}
