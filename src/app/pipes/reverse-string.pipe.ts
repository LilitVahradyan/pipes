import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})

export class ReverseStringPipe implements PipeTransform {
  str = '';

  transform(value: string): string {  
    for(let i = value.length - 1; i >= 0; i--){
      this.str += value[i]
    }
    return this.str
  }

}
