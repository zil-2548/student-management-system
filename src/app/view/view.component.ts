import { Component } from '@angular/core';
import {StudentService} from "../../servies/student.service";
import {Table} from "primeng/table";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {Student} from "../../model/student";
import {data} from "autoprefixer";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(public studentservies:StudentService,private messageService:MessageService,public router:Router) {

    this.studentservies.showstudent().subscribe(data=>this.studentservies.students=data);

  }
  clear(table: Table) {
    table.clear();

  }

  delete(id:any){

    console.log("delete record : " ,id);
    //const index = this.studentservies.getstudent().findIndex(obj => obj._id === id)
    // if (index > -1) {
    // //  this.studentservies.getstudent().splice(index, 1);
    //
    //   // const indexx = this.studentservies.deletestudent(id).subscribe(data=>{
    //   //
    //   // })
    //   this.studentservies.deletestudent(this.studentservies.students[index]).subscribe(data=>{
    //     console.log(data);
    //   });
    //
    //
    // }
    this.studentservies.deletestudent(id).subscribe(data=>{
      console.log("delete :",data);

      this.messageService.clear();
      // @ts-ignore
      this.messageService.add({ key: 'toast1', severity: 'error', summary: 'Deleted', detail: data.msg });
      this.studentservies.showstudent().subscribe(data=>this.studentservies.students=data);
    });

    // this.studentservies.showstudent(id)


  }

  updaterecord(stdata: any) {
    this.studentservies.alldata = stdata;
    this.studentservies.formmode = "Edit";
    this.router.navigate(['add']);

    this.studentservies.updatestudent(stdata).subscribe(data=>{
      console.log(data);
    });
  }


  protected readonly Student = Student;
}
