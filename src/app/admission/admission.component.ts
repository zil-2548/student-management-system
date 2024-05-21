import { Component } from '@angular/core';
import {Student} from "../../model/student";
import {DropdownFilterOptions} from "primeng/dropdown";
import {StudentService} from "../../servies/student.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MessageService} from "primeng/api";
import {CouresService} from "../../servies/coures.service";





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





  constructor(public studentservies:StudentService,public couersservie:CouresService ) {
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
  save(){
  let admdata = (this.couersservie.couress,this.studentservies.students);
    console.log(admdata);

  }



}
