import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  // idioma$ = new Subject<string>();
  idioma$ = new BehaviorSubject<string>('');

  constructor() { }

  changeIdioma(nuevoIdioma: string) {
    this.idioma$.next(nuevoIdioma)
  }
}
