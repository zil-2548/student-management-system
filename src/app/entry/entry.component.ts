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
    _sname:new FormControl("",[Validators.maxLength(50)]),
    _gender:new FormControl(""),
    _std:new FormControl('' ),
    _mdname:new FormControl('' ),
    _ltname:new FormControl('' ),
    _ftname:new FormControl('' ),
    _ftmdname:new FormControl('' ),
    _ftltname:new FormControl('' ),
    _ftegucation:new FormControl(''),


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
      Student=new Student(parseInt(allstudent._id),allstudent._sname,allstudent._gender, parseInt(allstudent._std),allstudent._ftltname,allstudent._ftegucation,allstudent._ftmdname,allstudent._ftname,allstudent._ltname,allstudent._mdname)
    //   const local= localStorage.getItem('studentdata');
    // const localdata = localStorage.getItem('studentdata');
    // const studentlist=[];
    if (this.studentservies.formmode=="new"){

      // if (localdata != null){
      //   const olddata= JSON.parse(localdata);
      //     // olddata.push(this.studentservies.setstudent(student));
      //   olddata.push(this.Studentgroup.value);
      //   localStorage.setItem('Studentalldata',JSON.stringify(olddata));
      //
      // }else {
      //   const newdata=[];
      //   // newdata.push(this.studentservies.setstudent(student));
      //   newdata.push(this.Studentgroup.value);
      //   localStorage.setItem('Studentalldata',JSON.stringify(newdata));
      // }

      this.studentservies.setstudent(student);


    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: `Student ${this.Studentgroup.value._sname} Record is successfully added.` });
    this.Studentgroup.reset();

  }
    else {
      // @ts-ignore
      let  index=this.studentservies.getstudent().findIndex(data => data.id==parseInt(this.Studentgroup.value._id))
      this.studentservies.getstudent()[index]=student;
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
