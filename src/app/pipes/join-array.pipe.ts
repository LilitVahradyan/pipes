import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'joinArray'
})

export class JoinArrayPipe implements PipeTransform{
    string = '';

    transform(arr: []): string{
        for(let item of arr){
            `${this.string += item + ', '}`;
        }
        return this.string
    }
}