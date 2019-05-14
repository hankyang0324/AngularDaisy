import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  name=['yang','han','hank','ding','ning','daisy'];
  group=['01 0','02 3','03 5','04 8','05 00','06 33','07 11','08 22','09 44','10 55',];
  color=['red','orange','yellow','green','blue','purple','black','white'];
  a={};

  constructor() { }

  getData(id:string) {
    const promise=new Promise<string[]>(resolve=>{
      setTimeout(()=>{
        if(id==='name') resolve([...this.name]);
        if(id==='group') resolve([...this.group]);
        if(id==='color') resolve([...this.color]);
      },1000);
    });
    return promise;
  }
}
                   