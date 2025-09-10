import { Component } from '@angular/core';
import { PlantillaComponent } from "./plantilla/plantilla.component";
import { ReactivosComponent } from "./reactivos/reactivos.component";

@Component({
  selector: 'app-cmp06-formularios',
  imports: [PlantillaComponent, ReactivosComponent],
  templateUrl: './cmp06-formularios.component.html',
  styleUrl: './cmp06-formularios.component.css'
})
export class Cmp06FormulariosComponent {

}
