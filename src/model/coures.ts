export class Coures {
  get crid(): number {
    return this._crid;
  }

  set crid(value: number) {
    this._crid = value;
  }

  get crname(): string {
    return this._crname;
  }

  set crname(value: string) {
    this._crname = value;
  }

  get crdp(): string {
    return this._crdp;
  }

  set crdp(value: string) {
    this._crdp = value;
  }




  get crfees(): number {
    return this._crfees;
  }

  set crfees(value: number) {
    this._crfees = value;
  }

  constructor(crid: number, crname: string, crdp: string, crfees: number) {
    this._crid = crid;
    this._crname = crname;
    this._crdp = crdp;
    this._crfees = crfees;
  }

  private _crid:number = 0;
  private _crname:string='';
  private _crdp:string='';
  private _crfees: number = 0;

}
