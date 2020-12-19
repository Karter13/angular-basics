import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(value: string, mLen = 200): string {
    if (value.length >= mLen) {
      return `${value.substring(0, mLen)}...`;
    }
    return value;
  }

}
