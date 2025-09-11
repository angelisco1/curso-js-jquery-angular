import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  warn(mensaje: string | number) {
    console.warn(`[${new Date().toLocaleString()}] ${mensaje}`)
  }

  info(mensaje: string | number) {
    console.info(`[${new Date().toLocaleString()}] ${mensaje}`)
  }

  error(mensaje: string | number) {
    console.error(`[${new Date().toLocaleString()}] ${mensaje}`)
  }
}
