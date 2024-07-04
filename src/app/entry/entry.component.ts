import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../servies/student.service";
import {MessageService} from "primeng/api";
import {Student} from "../../model/student";
import {Router} from "@angular/router";




@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent {
  Studentgroup=new FormGroup({
    _id:new FormControl(""),
    _studentname: new FormControl(""),
    _student_father_name:new FormControl(""),
    _student_last_name: new FormControl(""),
    _student_father_egucation:new FormControl(""),
    _student_father_phonenumber:new FormControl(""),
    _studentgender:new FormControl(""),
    _studentstd:new FormControl(""),

  })

  ingredient!: string;
  msg:string='new';

  constructor(public studentservies:StudentService,private messageService:MessageService,public router:Router) {

    if (this.studentservies.formmode=="Edit"){
      this.Studentgroup.setValue(this.studentservies.alldata);
      this.msg="Update";
    }

  }
  save(){

    let allstudent=this.Studentgroup.value
    console.log(allstudent);
    let student:// @ts-ignore
      Student=new Student(parseInt(allstudent._id),allstudent._studentname,allstudent._student_last_name,allstudent._student_father_name,allstudent._student_father_egucation,parseInt(allstudent._student_father_phonenumber),allstudent._studentgender,parseInt(allstudent._studentstd),);
    this.studentservies.setDbstudent(student).subscribe(data=>{
      console.log(data);

    });

    if (this.studentservies.formmode=="new"){


      this.studentservies.setstudent(student);


    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: `Student ${this.Studentgroup.value._studentname} Record is successfully added.` });
    this.Studentgroup.reset();

  }
    else {
      // @ts-ignore
      // let  index=this.studentservies.getstudent().findIndex(data => data.id==parseInt(this.Studentgroup.value._id))
      // this.studentservies.getstudent()[index]=student;
      // @ts-ignore
      this.studentservies.showstudent(allstudent._id).subscribe(data=>{
        console.log(data)
      })
      this.studentservies.formmode="new";
      this.msg="new";
      this.Studentgroup.reset();
      this.messageService.clear();
      this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: `Record is Successfuly updated.` });
      this.router.navigate(["view"])
    }
  }

  private ngOnInit() {

  }
}
