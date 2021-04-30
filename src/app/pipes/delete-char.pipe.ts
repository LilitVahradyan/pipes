import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteChar'
})

export class DeleteCharPipe implements PipeTransform {
 
  transform(value: string, str: string): string {
    return  value.split(str).join('');
  }

}
