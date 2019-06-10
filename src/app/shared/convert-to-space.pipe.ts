import { Pipe ,PipeTransform } from '@angular/core';

@Pipe({
    name:'convertToSpace'
})

export class ConvertToSpace implements PipeTransform {
  // here value will be the whole product code string
  //and the character will be the character that we want to replace
  // the character value is replaced by the second argument
    transform(value,character){
        return value.replace(character,' ')
    }
}