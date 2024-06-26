import { Component } from '@angular/core';
import {Student} from "../../model/student";
import {DropdownFilterOptions} from "primeng/dropdown";
import {StudentService} from "../../servies/student.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MessageService} from "primeng/api";
import {CouresService} from "../../servies/coures.service";
import {AdmissionService} from "../../servies/admission.service";
import {Adm} from "../../model/adm";
import {data} from "autoprefixer";





class cours {
}

class City {
}

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})
export class AdmissionComponent {

  studentnames:Array<string> = [];
  couersnames:Array<string> = [];

  admissiongrop = new FormGroup({
    _admst: new FormControl(null),
    _admcr: new FormControl(null),
  })



  constructor(public studentservies:StudentService,public couersservie:CouresService,public admissionservies:AdmissionService,public messageService:MessageService) {

    this.admissionservies.showstname().subscribe(data=> this.studentnames=data);
    this.admissionservies.showcouer().subscribe(data=> this.couersnames=data);

  }


  couers!: cours[];



  selectedCours!: cours;

  ngOnInit() {
    this.couers = this.couersservie.couress;
    console.log(this.couersservie.couress);


    this.allstd =this.studentservies.students;

  }

  allstd: City[] | undefined;

  selectedStudent: string | undefined;

  filterValue: string | undefined = '';


  resetFunction(options: DropdownFilterOptions) {
    // @ts-ignore
    options.reset();
    this.filterValue = '';
  }

  customFilterFunction(event: KeyboardEvent, options: DropdownFilterOptions) {
    // @ts-ignore
    options.filter(event);
  }
  save() {
    let alladm = this.admissiongrop.value;
    // @ts-ignore
    let admission :Adm=new Adm(alladm._admst,alladm._admcr)
    this.admissionservies.setdbadm(admission).subscribe(data=>{
    });
    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: `Student ${this.admissiongrop.value._admst} And Couers ${this.admissiongrop.value._admcr}.` });
    this.admissiongrop.reset();
  }



}
