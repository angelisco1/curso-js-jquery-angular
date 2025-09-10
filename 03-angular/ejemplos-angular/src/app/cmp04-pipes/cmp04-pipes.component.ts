import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { PuntitosPipe } from '../pipes/puntitos.pipe';
import { ColocarSimboloPipe } from '../pipes/colocar-simbolo.pipe';

@Component({
  selector: 'app-cmp04-pipes',
  imports: [
    TitleCasePipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DatePipe,
    SlicePipe,
    JsonPipe,
    AsyncPipe,
    PuntitosPipe,
    ColocarSimboloPipe,
  ],
  templateUrl: './cmp04-pipes.component.html',
  styleUrl: './cmp04-pipes.component.css'
})
export class Cmp04PipesComponent {
  producto = {
    titulo: 'one plus 11',
    precio: 780,
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at inventore totam ea ullam doloremque. Corrupti, inventore eligendi soluta in officia quis, odio nemo repudiandae perferendis exercitationem perspiciatis fugit recusandae?',
    fechaLanzamiento: new Date(2023, 3, 17)
  }

  productoPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(this.producto)
    }, 2000)
  })

}
