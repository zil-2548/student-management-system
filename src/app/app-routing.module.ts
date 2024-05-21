import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryComponent} from "./entry/entry.component";
import {ViewComponent} from "./view/view.component";
// import {AppComponent} from "./app.component";
import {AdmissionComponent} from "./admission/admission.component";
import {ViewAdmComponent} from "./view-adm/view-adm.component";
import {CouersEntryComponent} from "./couers-entry/couers-entry.component";
// import {CouersEntryComponent} from "./couers-entry/couers-entry.component";

const routes: Routes = [

  {path:"add",component:EntryComponent},
  {path:'view',component:ViewComponent},
  {path:'addcr',component:CouersEntryComponent},
  {path:'adm',component:AdmissionComponent},
  {path:'viewAdm',component:ViewAdmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
