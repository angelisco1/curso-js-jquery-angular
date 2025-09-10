import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntitos'
})
export class PuntitosPipe implements PipeTransform {

  transform(value: string): string {
    return value + '...';
  }

}
