import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CouresService} from "../../servies/coures.service";
import {MessageService} from "primeng/api";
import {Coures} from "../../model/coures";

@Component({
  selector: 'app-couers-entry',
  templateUrl: './couers-entry.component.html',
  styleUrl: './couers-entry.component.css'
})
export class CouersEntryComponent {

  Couersgroup=new FormGroup({
    _crid:new FormControl('', [Validators.required]),
    _crname:new FormControl('', [Validators.required]),
    _crdp:new FormControl(''),
    _crfees:new FormControl('' ),
  })

  constructor(public CouersService:CouresService,private messageService:MessageService) {
  }


  savecr(){
    let allcouersdata=this.Couersgroup.value;
    console.log(allcouersdata);

    // @ts-ignore
    //let course:Course=new Course();
     // course.crid(allcouersdata._crid);
    let couers: Coures=new Coures(parseInt(allcouersdata._crid),allcouersdata._crname,allcouersdata._crdp,parseInt(allcouersdata._crfees));

    this.CouersService.setcouress(couers);
    this.CouersService.dbcouer(couers).subscribe(data=>{
      console.log(data);
    })

    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: `${this.Couersgroup.value._crname} Coures is successfully added.` });
    this.Couersgroup.reset();

  }
}
