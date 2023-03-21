import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  //allContacts - array , searchKey-amal ,propName - name
  transform(allContacts: any=[], searchKey: string, propName: string): any[] {
    
    const result:any=[]    //transform output
    if(!allContacts||searchKey==''||propName==''){
      return allContacts;
    }


    allContacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().startsWith(searchKey.toLowerCase())){
        result.push(contact);
      }
    })

    return result;


  }

}
