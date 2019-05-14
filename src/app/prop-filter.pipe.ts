import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propFilter'
})
export class PropFilterPipe implements PipeTransform {

  transform(datas: string[], search:string) {
    let arr=[...datas];
    arr = arr.filter(data => {
      let splited = data.split(' ');
      for(let str of splited) {
        if(str.indexOf(search)===0 || data.indexOf(search)===0) return true;
      }
      return false;
    });
    return arr;
  }

}
