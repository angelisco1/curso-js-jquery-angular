import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-errors',
  imports: [],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.css'
})
export class ErrorsComponent implements OnChanges {
  @Input() errores: {[key: string]: any} | null | undefined = {}
  mensajesError: Array<string> = []

  ngOnChanges() {
    this.mensajesError = []

    // {required: true, email: true}
    const entries = Object.entries(this.errores || {})

    // [[required, true], [email, true]]
    entries.forEach((entry) => {
      const [error, datosError] = entry

      if (error === 'required') {
        this.mensajesError.push(`El campo es obligatorio`)
      }

      if (error === 'minlength') {
        const faltan = datosError.requiredLength - datosError.actualLength
        const mensaje = `Tiene que tener una longitud de ${datosError.requiredLength}. Te faltan ${faltan}.`
        this.mensajesError.push(mensaje)
      }

    })

  }


}
