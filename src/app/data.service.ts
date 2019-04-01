import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  name=['yang','han','hank','ding','ning','daisy'];
  group=['01','02','03','04','05','06','07','08','09','10',];
  color=['red','orange','yellow','green','blue','purple','black','white'];

  constructor() { }

  getData(id:string) {
    if(id==='name') return [...this.name];
    if(id==='group') return [...this.group];
    if(id==='color') return [...this.color];
  }
}
