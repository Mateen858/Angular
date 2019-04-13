import { Component, OnInit } from "@angular/core";

@Component({
selector: 'app-customers',
templateUrl : './customercomponent.html'

})

export class CustomerComponent implements OnInit {
    title : string;
    
    constructor(){
       
    }
    ngOnInit(){
     this.title = "Customers";
    
    }
}