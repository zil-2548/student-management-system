import { Injectable } from '@angular/core';
import {Coures} from "../model/coures";
import {Student} from "../model/student";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CouresService {
  public couress: Coures[] = new Array<Coures>();

  constructor(public http: HttpClient) {
  }

  setcouress(couress: Coures) {
    this.couress.push(couress);
  }

  dbcouer(couress:Coures):Observable<Coures>{
    return this.http.post<Coures>("http://localhost:3000/couers",JSON.parse(JSON.stringify(couress)))
  }

  getcouress() {
    return this.couress;
  }
  showcoers(): Observable<Coures []> {
    // @ts-ignore
    return this.http.get<Coures []>("http://localhost:3000/couers")
  }
  deletecouress(couress:Coures):Observable<Coures> {
    // @ts-ignore
    return this.http.delete<Coures>("http://localhost:3000/couers",JSON.parse(JSON.stringify(couress)));
  }
}
