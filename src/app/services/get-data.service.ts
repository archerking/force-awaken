import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { GetSwapiService } from './get-swapi.service';
import { ErrorStateManagerService } from './error-state-manager.service';
import { ResponseStateManagerService } from './response-state-manager.service';

@Injectable()
export class GetDataService implements Resolve<any> {

  constructor(
    private getswapi: GetSwapiService,
    private errorStateManager: ErrorStateManagerService,
    private responseStateManager: ResponseStateManagerService
  ) { 
  }

  /**
   * Preloading data response from swapi.
   * 
   * @param {ActivatedRouteSnapshot} route 
   * @param {RouterStateSnapshot} state 
   * @returns {Promise<any>} 
   * @memberof GetDataService
   */
  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Promise<any>{
    console.log(route);
    return this.getswapi.getPeople(route.params['pageid']).toPromise().then(res=>{
      /**
       * Resetting error flag
       */
      this.errorStateManager.isError = false;
      /**
       * Setting response data to 'resposeState' event emitter.
       */
      this.responseStateManager.setState(res, 'peopleRes');
      /**
       * Returning response incase want to consume anywhere directly.
       */
      return res;
    }).catch(e=>{
      /**
       * Setting error response to error handler service for further handling.
       */
      this.errorStateManager.setError(e);
    });
  }

  /**
   * Resolving swapi person details.
   * 
   * @param {number} id 
   * @returns {Promise<any>} 
   * @memberof GetDataService
   */
  resolvePerson(id:number):Promise<any>{
    return this.getswapi.getPerson(id).toPromise().catch(e=>this.errorStateManager.setError(e));
  }
}
