export class Student {
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

  get std(): number {
    return this._std;
  }

  set std(value: number) {
    this._std = value;
  }

  get fees(): number {
    return this._fees;
  }

  set fees(value: number) {
    this._fees = value;
  }

  constructor(public _id: number, public _sname:string, public _gender:string, public _std:number , public _fees:number) {
  }
}
