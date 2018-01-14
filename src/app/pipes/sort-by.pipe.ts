import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): any {
    if (array) {
      let sortFields = args[0];
      array.sort((a: any, b:any) =>{
        if(a[sortFields] < b[sortFields]){
            return -1;
        }
        else if(a[sortFields] > b[sortFields]) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
  }

}
