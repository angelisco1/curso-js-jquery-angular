import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { InicioComponent } from "./inicio/inicio.component";

@Component({
  selector: 'app-cmp07-servicios-observables-y-http',
  imports: [
    ToolbarComponent,
    InicioComponent,
],
  templateUrl: './cmp07-servicios-observables-y-http.component.html',
  styleUrl: './cmp07-servicios-observables-y-http.component.css'
})
export class Cmp07ServiciosObservablesYHttpComponent {

  constructor(
    private loggerService: LoggerService,
  ) { }

  mostrarWarning() {
    this.loggerService.warn("Cuidado!")
  }

  mostrarInfo() {
    this.loggerService.info("Información sobre la PRL")
  }

  mostrarError() {
    this.loggerService.error("¡Eso está mal porque lo digo yo!")
  }

}
