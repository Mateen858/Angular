import { Injectable } from "@angular/core";

import { Observable, from } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators'


@Injectable()
export class CustomerService{


    constructor(private http: HttpClient){    }

getCustomers () : Observable<any[]>{
    return this.http.get<any[]>("../assets/customer.json").pipe(
catchError(this.handleError)

    );
}


getCustomer(id: number) : Observable<any> {
    return this.http.get<any[]>("../assets/customer.json")
      .pipe(
        map(customers => {
          let customer = customers.filter((cust: any) => cust.id === id);
          return (customer && customer.length) ? customer[0] : null;
        }),
        catchError(this.handleError)
      )
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