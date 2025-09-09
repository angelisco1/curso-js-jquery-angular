import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp01-data-binding',
  imports: [FormsModule],
  templateUrl: './cmp01-data-binding.component.html',
  styleUrl: './cmp01-data-binding.component.css'
})
export class Cmp01DataBindingComponent {
  // ------------------
  // - Tipos de datos -
  // ------------------
  // - string
  // - number
  // - boolean
  // - void
  // - null
  // - undefined
  // - any
  // - Array<string> o string[]
  // - Array<string | number> o string[] | number[]
  // - { nombre: string, edad: number }

  nombre: string = "Charly"
  apellido: string = "Falco"
  edad: number = 17

  logoAngular: string = "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif"
  nombreLogo: string = "Angular"

  getEmailEmpresa(): string {
    return `${this.nombre[0].toLowerCase()}.${this.apellido.toLowerCase()}@empresa.com`
  }

  cambiarNombre(nombre: string): void {
    console.log('Cambiando nombre')
    this.nombre = nombre
  }

  cambiarNombreConEvento(event: Event, nombre: string): void {
    console.log(event)
    console.log('Has pulsado en el botón que tiene como texto ' + (event.target as HTMLInputElement).textContent)
    console.log('Cambiando nombre')
    this.nombre = nombre
  }

  setNombre(event: Event) {
    console.log(event)
    const nuevoNombre = (event.target as HTMLInputElement).value
    this.nombre = nuevoNombre
  }

}
