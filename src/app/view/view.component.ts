import { Component } from '@angular/core';
import {StudentService} from "../../servies/student.service";
import {Table} from "primeng/table";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(public studentservies:StudentService,private messageService:MessageService,public router:Router) {
  }
  clear(table: Table) {
    table.clear();
  }

  delete(id:any){
    const index = this.studentservies.getstudent().findIndex(obj => obj.id === id)
    if (index > -1) {
      this.studentservies.getstudent().splice(index, 1);
    }

    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'error', summary: 'Deleted', detail: `Record has been deleted.` });
  }

  updaterecord(stdata: any) {
    this.studentservies.alldata = stdata;
    this.studentservies.formmode = "Edit";
    this.router.navigate(['add']);


  }

}
