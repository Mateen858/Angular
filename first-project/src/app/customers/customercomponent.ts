import { Component, OnInit } from "@angular/core";

@Component({
selector: 'app-customers',
templateUrl : './customercomponent.html'

})

export class CustomerComponent implements OnInit {
    title : string;
    customer: any[];

   
    constructor(){
       
    }
    ngOnInit(){
     this.title = "Customers";
    this.customer = [
        {Id:1, Name:"rana mateen from parent", Designation: "Full Stack Developer"},
    {Id:2, Name:"ahmed from parent", Designation: "Full Stack Developer"},
    {Id:3, Name:"ahsan from parent", Designation: "Full Stack Developer"}
    ]
    }
}