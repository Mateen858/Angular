import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customercomponent';
import {CustomersListComponent} from './customerslistcomponent';
import {FilteredTextBox} from './FilteredTextBox'

import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule  } from "./customers.routingmodule";


@NgModule({
    declarations: [    CustomerComponent, CustomersListComponent, FilteredTextBox],
  imports: [    CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
  providers: [],
  exports : [CustomerComponent, FilteredTextBox],
})
export class CustomersModule { }
