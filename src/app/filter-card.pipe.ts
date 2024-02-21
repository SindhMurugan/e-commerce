import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCard'
})
export class FilterCardPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    var filteredData:any[]=[]
    if(args == ''){
      return value;
    }
   value.filter(val=>{
          if (
              val.productName.toLowerCase().includes(args.toLowerCase())
          ) {
              filteredData.push(val);
          }
     
      // return filteredData;
  });

  return filteredData
  }

}
