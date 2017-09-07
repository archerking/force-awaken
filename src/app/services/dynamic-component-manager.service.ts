import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { RegisteredComps } from '../molecules';

@Injectable()
export class DynamicComponentManagerService {

  constructor(
    private _cfr : ComponentFactoryResolver
  ) { }

  /**
   * 
   * 
   * @param {*} containerRef 
   * @param {*} compClass 
   * @param {*} [data] 
   * @returns 
   * @memberof DynamicComponentManagerService
   */
  ResolveComponent(containerRef:any, compClass:any, data?:any ){
    /**
     *  Using `ComponentFactoryResolver` here to accpet component calss and return `ComponentFactory`.
     */
    let compFactory = this._cfr.resolveComponentFactory(RegisteredComps[compClass]);
    
    /**
     * Injecting component to the parent container reference.
     */
    let component = containerRef.createComponent(compFactory);
    /**
     * Passing data to compoent if available.
     */
    component.instance['data'] = data || {};
    component.instance['compref'] = component;

    return component;
  }
}
