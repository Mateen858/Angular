import {Component, OnInit} from '@angular/core';

@Component({
    selector : 'app-filteredtextbox',
    template : `
    <input type='text' [(ngModel)]="thistext">
    `
})

export class FilteredTextBox implements OnInit {
    thistext : string;

    constructor (){

    }

    ngOnInit (){
        this.thistext = "please write something to search"
    }
}
