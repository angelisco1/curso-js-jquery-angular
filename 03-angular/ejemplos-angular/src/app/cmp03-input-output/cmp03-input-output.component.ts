import { Component } from '@angular/core';
import { SugusComponent } from "./sugus/sugus.component";
import { ProductoSugusComponent } from "./producto-sugus/producto-sugus.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cmp03-input-output',
  imports: [SugusComponent, ProductoSugusComponent, JsonPipe],
  templateUrl: './cmp03-input-output.component.html',
  styleUrl: './cmp03-input-output.component.css'
})
export class Cmp03InputOutputComponent {
  carrito: Array<{nombre: string, cantidad: number}> = []


  addSugusToCart(producto: {sabor: string, cantidad: number}) {
    const posProducto = this.carrito.findIndex(prod => prod.nombre === producto.sabor)

    if (posProducto < 0) {
      this.carrito.push({
        nombre: producto.sabor,
        cantidad: producto.cantidad
      })
    } else {
      this.carrito[posProducto].cantidad += producto.cantidad
    }

  }

}
