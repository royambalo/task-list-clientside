import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppToDoListComponent } from './app-to-do-list/app-to-do-list.component';
 
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComps=[]