import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(DataArray:any[],serachString:string,searchKey:string): any {
    const result:any=[]

  if(!DataArray || !serachString || !searchKey) {

    return DataArray;

  }
  else{

    // DataArray.forEach((item:any)=>{
    //   if(item.name.trim().toLowerCase().includes(serachString.trim().toLowerCase()))
    //   {
    //     result.push(item)
    //   }
    // })
    //   return result

    return DataArray.filter((item:any)=>item.name.trim().toLowerCase().includes(serachString.trim().toLowerCase()))

  }
  }

}
