import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
<router-outlet></router-outlet>  
  `
  
  
  
})
export class AppComponent implements OnInit {
  title : string;

  constructor(){

  }
  ngOnInit(){
    this.title = "this title is loading from init function"
  }
}
