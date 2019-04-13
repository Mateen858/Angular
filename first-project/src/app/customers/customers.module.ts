import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './customercomponent';
import {CustomersListComponent} from './customerslistcomponent';
  import { from } from 'rxjs';

@NgModule({
    declarations: [    CustomerComponent, CustomersListComponent  ],
  imports: [    CommonModule  ],
  providers: [],
  exports : [CustomerComponent],
})
export class CustomersModule { }
