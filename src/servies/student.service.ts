import { Injectable } from '@angular/core';
import {Student} from "../model/student";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {HttpClient, HttpContext} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  alldata:any;

  formmode:string='new';
  public students: Student[]=new Array<Student>();
  constructor(public http:HttpClient) { }




  setstudent(student:Student){
    this.students.push(student);


  }

  getstudent(){
    return this.students;
  }

  setDbstudent(student:Student):Observable<Student>{
    return this.http.post<Student>("http://localhost:3000/users",JSON.parse(JSON.stringify(student)))
  }
  deletestudent(student:Student):Observable<Student>{
    console.log("deletestudent :",student);
    // @ts-ignore
   return  this.http.delete<Student>("http://localhost:3000/users",JSON.parse(JSON.stringify(student)))
  //  return  this.http.delete<Student>("http://localhost:3000/users");

  }
  updatestudent(student:Student):Observable<Student>{
    // @ts-ignore
    return this.http.put<Student>("http://localhost:3000/users",JSON.parse(JSON.stringify(student)))
  }
  showstudent():Observable<Student []>{
    // @ts-ignore
     return this.http.get<Student []>("http://localhost:3000/users")
  }
}
