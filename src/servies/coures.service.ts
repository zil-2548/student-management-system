import { Injectable } from '@angular/core';
import {Coures} from "../model/coures";

@Injectable({
  providedIn: 'root'
})
export class CouresService {
    public couress: Coures[]= new Array<Coures>();
  constructor() { }

    setcouress(couress:Coures){
      this.couress.push(couress);
    }

    getcouress(){
    return this.couress;
    }
}
