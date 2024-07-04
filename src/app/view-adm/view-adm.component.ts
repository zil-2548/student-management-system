import { Component } from '@angular/core';
import {AdmissionService} from "../../servies/admission.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-view-adm',
  templateUrl: './view-adm.component.html',
  styleUrl: './view-adm.component.css'
})
export class ViewAdmComponent {
constructor(public admissionservies:AdmissionService,public messageService:MessageService) {
  this.admissionservies.showadm().subscribe(data=>{this.admissionservies.adm=data
    console.log(data);
  })
}
}
