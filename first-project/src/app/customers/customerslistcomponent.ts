import {Component, OnInit} from '@angular/core'


@Component({

selector:"app-customersList",
templateUrl: './customerslist.html'
})

export class CustomersListComponent implements OnInit{
title: string;
isHidden : boolean;
people : any[];


showhideHeading(){
    this.isHidden = !this.isHidden;
}

    ngOnInit(){
this.title = "List of Customers";
this.people = [
    {Id:1, Name:"Rana Mateen", Designation: "Full Stack Developer"},
    {Id:2, Name:"Ahmed", Designation: "Full Stack Developer"},
    {Id:3, Name:"Ahsan", Designation: "Full Stack Developer"}
   ]       
    }
}