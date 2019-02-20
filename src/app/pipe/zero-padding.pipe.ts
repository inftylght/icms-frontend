import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPadding'
})
export class ZeroPaddingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
