import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loader: boolean = false;
  constructor(
    private router: Router
  ) { 
    router.events.subscribe(value => {
      if(value instanceof NavigationStart){
        console.log(`Loader On!`);
        this.loader = true;
      }
      if(value instanceof NavigationEnd 
      || value instanceof NavigationCancel
      || value instanceof NavigationError){
        console.log(`Loader Off!`);
        this.loader = false;
      }
    });
  }

  ngOnInit() {
  }

}
