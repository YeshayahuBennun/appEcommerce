import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(text: string,truncateIn:number): string {
    if (text.length > truncateIn) {
      return text.substr(0, truncateIn) + '...'
    }
    return text;
  }
}
