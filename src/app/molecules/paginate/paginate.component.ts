import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  @Input() count:any=0;
  pages:Array<any> = [];
  constructor() { }

  ngOnInit() {
    let i = 1;
    while(this.pages.push(i++) < Math.ceil(this.count/10));
  }

}
