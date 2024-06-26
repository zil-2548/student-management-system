export class Adm {
  get admst(): string {
    return this._admst;
  }

  set admst(value: string) {
    this._admst = value;
  }

  get admcr(): string {
    return this._admcr;
  }

  set admcr(value: string) {
    this._admcr = value;
  }

  private _admst: string='';
private _admcr:string='';

constructor(_admst:string,_admcr:string) {
  this._admcr=_admcr;
  this._admst=_admst;
}
}
