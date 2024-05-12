import { Injectable } from '@angular/core';
import {Student} from "../model/student";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  alldata:any;

  formmode:string='new';
  public students: Student[]=new Array<Student>();
  constructor() { }



  setstudent(student:Student){
    this.students.push(student);


  }

  getstudent(){
    return this.students;
  }
}
