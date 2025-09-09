import { Component } from '@angular/core';
import { PreviewCvComponent } from "./preview-cv/preview-cv.component";
import { FormCvComponent } from "./form-cv/form-cv.component";

@Component({
  selector: 'app-cv-container',
  imports: [PreviewCvComponent, FormCvComponent],
  templateUrl: './cv-container.component.html',
  styleUrl: './cv-container.component.css'
})
export class CvContainerComponent {

  nombre: string = 'Charly'
  apellido: string = 'Falco'
  email: string = 'cfalco@gmail.com'

  get nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  cambiarDato(dato: {value: string, tipo: 'nombre' | 'apellido' | 'email'}) {
    this[dato.tipo] = dato.value
  }

  cambiarNombre(nombre: {value: string}) {
    this.nombre = nombre.value
  }

  cambiarApellido(apellido: {value: string}) {
    this.apellido = apellido.value
  }

  cambiarEmail(email: {value: string}) {
    this.email = email.value
  }

}
