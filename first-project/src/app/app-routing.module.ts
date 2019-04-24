// cmd command for making the route file ng new projectname --routing

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path :'', pathMatch : 'full', redirectTo: '/customers'},
{path :'**', pathMatch : 'full', redirectTo: '/customers'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
