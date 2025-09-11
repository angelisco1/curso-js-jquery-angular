import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-plantilla',
  imports: [FormsModule],
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.css'
})
export class PlantillaComponent {

  formRegistro = {
    username: 'cfalco',
    email: '',
    password: '',
  }


  signupBtn() {
    console.log("Sign up BTN")
    console.log(this.formRegistro)
    // HTTP para hacer el registro
  }

  signupSubmit(form: NgForm) {
    console.log("Sign up Submit")
    // console.log(this.formRegistro)
    console.log(form)
    console.log(form.value)
  }

}
