import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from "./customercomponent";

const routes: Routes = [
    {path: 'customers', component: CustomerComponent}
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class CustomersRoutingModule {

}