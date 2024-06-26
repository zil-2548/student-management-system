import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryComponent} from "./entry/entry.component";
import {ViewComponent} from "./view/view.component";
// import {AppComponent} from "./app.component";
import {AdmissionComponent} from "./admission/admission.component";
import {ViewAdmComponent} from "./view-adm/view-adm.component";
import {CouersEntryComponent} from "./couers-entry/couers-entry.component";
import {CouersViewComponent} from "./couers-view/couers-view.component";
// import {CouersEntryComponent} from "./couers-entry/couers-entry.component";

const routes: Routes = [

  {path:"add",component:EntryComponent},
  {path:'view',component:ViewComponent},
  {path:'AddCouers',component:CouersEntryComponent},
  {path:'ViewCouers',component:CouersViewComponent},
  {path:'adm',component:AdmissionComponent},
  {path:'viewAdm',component:ViewAdmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
