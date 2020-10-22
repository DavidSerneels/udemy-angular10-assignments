import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: any[], param: string): any[] {
    if (values.length <= 1) {
      return values;
    }
    return values.sort((v1: any, v2: any) => {
      if (v1[param] > v2[param]) {
        return 1;
      }
      if (v1[param] < v2[param]) {
        return -1;
      }
      return 0;
    });
  }

}
