import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-cv',
  imports: [],
  templateUrl: './form-cv.component.html',
  styleUrl: './form-cv.component.css'
})
export class FormCvComponent {
  @Input() nombre: string = ''
  @Input() apellido: string = ''
  @Input() email: string = ''

  @Output() onChangeNombre: EventEmitter<{value: string}> = new EventEmitter<{value: string}>()
  @Output() onChangeApellido: EventEmitter<{value: string}> = new EventEmitter<{value: string}>()
  @Output() onChangeEmail: EventEmitter<{value: string}> = new EventEmitter<{value: string}>()

  sendNombre(event: Event) {
    const nombre = (event.target as HTMLInputElement).value
    this.onChangeNombre.emit({value: nombre})
  }

  sendApellido(event: Event) {
    const apellido = (event.target as HTMLInputElement).value
    this.onChangeApellido.emit({value: apellido})
  }

  sendEmail(event: Event) {
    const email = (event.target as HTMLInputElement).value
    this.onChangeEmail.emit({value: email})
  }
}
