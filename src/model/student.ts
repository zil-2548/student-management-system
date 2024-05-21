export class Student {
  private _id:number=0;
  private _sname: string='';
  private _gender:string='';
  private _mdname:string='';
  private _ltname:string='';
  private _ftname:string='';
  private _ftmdname:string='';
  private _ftltname:string='';
  private _ftegucation:string='';
  private _std:number=0;


  get std(): number {
    return this._std;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get sname(): string {
    return this._sname;
  }

  set sname(value: string) {
    this._sname = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get mdname(): string {
    return this._mdname;
  }

  set mdname(value: string) {
    this._mdname = value;
  }

  get ltname(): string {
    return this._ltname;
  }

  set ltname(value: string) {
    this._ltname = value;
  }

  get ftname(): string {
    return this._ftname;
  }

  set ftname(value: string) {
    this._ftname = value;
  }

  get ftmdname(): string {
    return this._ftmdname;
  }

  set ftmdname(value: string) {
    this._ftmdname = value;
  }

  get ftltname(): string {
    return this._ftltname;
  }

  set ftltname(value: string) {
    this._ftltname = value;
  }

  get ftegucation(): string {
    return this._ftegucation;
  }

  set ftegucation(value: string) {
    this._ftegucation = value;
  }


  constructor(id: number, sname: string, gender: string, ftname: string, std: number) {
    this._id = id;
    this._sname = sname;
    this._gender = gender;
    this._ftname = ftname;
    this._std = std;
  }
}
