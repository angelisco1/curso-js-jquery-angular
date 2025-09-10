import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colocarSimbolo'
})
export class ColocarSimboloPipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): string {
    if (!value) {
      return ''
    }

    const simbolo = value[0]
    return value.slice(1) + simbolo;
  }

}
