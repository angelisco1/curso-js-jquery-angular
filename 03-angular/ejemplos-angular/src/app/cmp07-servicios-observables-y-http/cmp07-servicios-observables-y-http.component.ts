import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { InicioComponent } from "./inicio/inicio.component";
import { UsuariosService } from '../services/usuarios.service';
import { Usuario, Usuarios } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cmp07-servicios-observables-y-http',
  imports: [
    ToolbarComponent,
    InicioComponent,
    AsyncPipe,
],
  templateUrl: './cmp07-servicios-observables-y-http.component.html',
  styleUrl: './cmp07-servicios-observables-y-http.component.css'
})
export class Cmp07ServiciosObservablesYHttpComponent {
  usuarios: Usuarios = []
  usuarios$: Observable<Usuarios> | null = null

  mostrarInicio: boolean = true

  constructor(
    private loggerService: LoggerService,
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit() {
   this.usuariosService.getUsuarios()
    .subscribe((usuarios: Usuarios) => {
      this.usuarios = usuarios
    })

    this.usuarios$ = this.usuariosService.getUsuarios()
  }

  mostrarWarning() {
    this.loggerService.warn("Cuidado!")
  }

  mostrarInfo() {
    this.loggerService.info("Información sobre la PRL")
  }

  mostrarError() {
    this.loggerService.error("¡Eso está mal porque lo digo yo!")
  }


  crearUsuario() {
    const usuario: Partial<Usuario> = {
      "name": "Charly Falco",
      "username": "cfalco",
      "email": "charly.falco@gmail.com",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
    this.usuariosService.createUsuario(usuario)
      .subscribe((usuario: Usuario) => {
        console.log(usuario)
        this.usuarios.push(usuario)
      })
  }

  toggleInicio() {
    this.mostrarInicio = !this.mostrarInicio
  }

}
