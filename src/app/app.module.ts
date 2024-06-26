import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import { EntryComponent } from './entry/entry.component';
import {PaginatorModule} from "primeng/paginator";
import {ButtonModule} from "primeng/button";
import {RadioButtonModule} from "primeng/radiobutton";
import {ReactiveFormsModule} from "@angular/forms";
import { ViewComponent } from './view/view.component';
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import { AdmissionComponent } from './admission/admission.component';
import {ListboxModule} from "primeng/listbox";
import { ViewAdmComponent } from './view-adm/view-adm.component';
import { CouersEntryComponent } from './couers-entry/couers-entry.component';
import {HttpClientModule} from "@angular/common/http";
import { CouersViewComponent } from './couers-view/couers-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ViewComponent,
    AdmissionComponent,
    ViewAdmComponent,
    CouersEntryComponent,
    CouersViewComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    PaginatorModule,
    ButtonModule,
    RadioButtonModule,
    ReactiveFormsModule,
    ToastModule,
    MenubarModule,
    TableModule,
    InputTextModule,
    ListboxModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
