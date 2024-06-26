import { Component } from '@angular/core';
import {Table} from "primeng/table";
import {StudentService} from "../../servies/student.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {CouresService} from "../../servies/coures.service";

@Component({
  selector: 'app-couers-view',
  templateUrl: './couers-view.component.html',
  styleUrl: './couers-view.component.css'
})
export class CouersViewComponent {

  constructor(public CouersService:CouresService,private messageService:MessageService,public router:Router) {
  this.CouersService.showcoers().subscribe(data=>this.CouersService.couress=data);
  }

  clear(table: Table) {
    table.clear();

  }
  delete(id:any){
    // @ts-ignore
    const index = this.CouersService.getcouress().findIndex(obj=>obj.crid === id)
    this.CouersService.deletecouress(this.CouersService.couress[index]).subscribe(data=>{
      console.log("delete :",data);

      this.messageService.clear();
      // @ts-ignore
      this.messageService.add({ key: 'toast1', severity: 'error', summary: 'Deleted', detail: data.msg });
      this.CouersService.showcoers().subscribe(data=>this.CouersService.couress=data);
    })
  }
}
