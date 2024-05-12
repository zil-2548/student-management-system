import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryComponent} from "./entry/entry.component";
import {ViewComponent} from "./view/view.component";
import {AppComponent} from "./app.component";

const routes: Routes = [

  {path:"add",component:EntryComponent},
  {path:'view',component:ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
