import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorsComponent } from "../errors/errors.component";

@Component({
  selector: 'app-reactivos',
  imports: [
    ReactiveFormsModule,
    ErrorsComponent
],
  templateUrl: './reactivos.component.html',
  styleUrl: './reactivos.component.css'
})
export class ReactivosComponent {

  formRegistro: FormGroup | null = null

  ngOnInit() {
    this.formRegistro = new FormGroup({
      username: new FormControl('cfalco', Validators.required),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }

  signup() {
    console.log(this.formRegistro)
    console.log(this.formRegistro?.value)
  }

}
