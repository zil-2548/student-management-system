export class Student {
  private _id: number=0;
  private _studentname: string="";
  // private _student_midel_name: string="";
  private _student_last_name: string="";
  private _student_father_name: string="";
  private _student_father_egucation: string="";
  private _student_father_phonenumber: number=0;
  private _studentgender: string="";
  private _studentstd: number=0;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get studentname(): string {
    return this._studentname;
  }

  set studentname(value: string) {
    this._studentname = value;
  }

  // get student_midel_name(): string {
  //   return this._student_midel_name;
  // }
  //
  // set student_midel_name(value: string) {
  //   this._student_midel_name = value;
  // }

  get student_last_name(): string {
    return this._student_last_name;
  }

  set student_last_name(value: string) {
    this._student_last_name = value;
  }

  get student_father_name(): string {
    return this._student_father_name;
  }

  set student_father_name(value: string) {
    this._student_father_name = value;
  }

  get student_father_egucation(): string {
    return this._student_father_egucation;
  }

  set student_father_egucation(value: string) {
    this._student_father_egucation = value;
  }

  get student_father_phonenumber(): number {
    return this._student_father_phonenumber;
  }

  set student_father_phonenumber(value: number) {
    this._student_father_phonenumber = value;
  }

  get studentgender(): string {
    return this._studentgender;
  }

  set studentgender(value: string) {
    this._studentgender = value;
  }

  get studentstd(): number {
    return this._studentstd;
  }

  set studentstd(value: number) {
    this._studentstd = value;
  }

constructor(id:number,studentname:string,student_last_name:string,student_father_name:string,student_father_egucation:string,student_father_phonenumber:number,studentgender:string,studentstd:number) {
    this._id = id;
    this._studentname=studentname;
    // this._student_midel_name=student_midel_name;
    this._student_last_name=student_last_name;
    this._student_father_name=student_father_name;
    this._student_father_egucation=student_father_egucation;
    this._student_father_phonenumber=student_father_phonenumber;
    this._studentgender=studentgender;
    this._studentstd=studentstd;
}
}
