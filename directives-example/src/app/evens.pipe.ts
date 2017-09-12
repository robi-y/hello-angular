import { forEach } from '@angular/router/src/utils/collection';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evens'
})
export class EvensPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const res = new Array<number>();
    const nums = value as Array<number>;

    for (const n of nums) {
      if (n % 2 === 0) {
        res.push(n);
      }
    }

    return res;
  }

}
