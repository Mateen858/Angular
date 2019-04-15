import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';

import {  } from "@angular/common/http/";


@Injectable()
export class CustomerService{

    constructor(){

    }


    private handleError (error:any){

        
        if (error.error instanceof Error){
            console.log("error messgae:", error.error.messgae)
            return Observable.throw (error.error.messgae);
            
        }
        console.log("Server error", error);
        return Observable.throw(error || 'Node.js server error');
    }


}