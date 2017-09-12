import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustom'
})
export class MyCustomPipe implements PipeTransform  {
    public transform(value: any, args: any[]): any {
      const str = value as string;

      return '?' + str + '?';
    }
}
