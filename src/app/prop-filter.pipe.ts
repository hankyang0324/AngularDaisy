import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propFilter'
})
export class PropFilterPipe implements PipeTransform {

  transform(datas: any, search:string) {
    let arr=[...datas];
    arr = arr.filter(data => data.indexOf(search)===0);
    return arr;
  }

}
