import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Adm} from "../model/adm";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  public adm:Adm[]= new Array<Adm>()
  constructor(public http:HttpClient) { }

setdbadm(adm:Adm):Observable<Adm>{
    return this.http.post<Adm>("http://localhost:3000/ADM",JSON.parse(JSON.stringify(adm)))
}

showstname():Observable<any []>{
    // @ts-ignore
  return this.http.get<any []>("http://localhost:3000/users/name")
}
showcouer():Observable<any []>{
    return this.http.get<any []>("http://localhost:3000/couers/name")
}
}
