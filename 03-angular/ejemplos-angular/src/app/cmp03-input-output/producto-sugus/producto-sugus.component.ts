import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SugusComponent } from '../sugus/sugus.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-sugus',
  imports: [SugusComponent, FormsModule],
  templateUrl: './producto-sugus.component.html',
  styleUrl: './producto-sugus.component.css'
})
export class ProductoSugusComponent {
  @Input() sabor: string = 'limón'
  @Input() color: string = 'yellow'
  @Output() onAddToCart: EventEmitter<{sabor: string, cantidad: number}> = new EventEmitter<{sabor: string, cantidad: number}>()

  cantidad: number = 1

  addToCart() {
    this.onAddToCart.emit({sabor: this.sabor, cantidad: this.cantidad})
  }

  setCantidad(event: any) {
    this.cantidad = event.target.value
  }

}
