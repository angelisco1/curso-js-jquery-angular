import { Component, OnInit } from '@angular/core';
import { VendehumosService } from '../../services/vendehumos.service';
import { Vendehumo, Vendehumos } from '../../types/vendehumo.model';
import { VendehumoCardComponent } from "../../components/vendehumo-card/vendehumo-card.component";

@Component({
  selector: 'app-home',
  imports: [VendehumoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  listaVendehumos: Vendehumos = []

  constructor(
    private vendehumosService: VendehumosService,
  ) { }

  ngOnInit(): void {
    this.vendehumosService.getVendehumos()
      .subscribe((vendehumos: Vendehumos) => {
        this.listaVendehumos = vendehumos
      })
  }

  votar(vendehumo: Vendehumo) {
    this.vendehumosService.actualizarVotos(vendehumo.id, vendehumo.numVotos)
      .subscribe((vendehumoActualizado: Vendehumo) => {

        const listaActualizada = this.listaVendehumos.map((vendehumo: Vendehumo) => {
          if (vendehumo.id === vendehumoActualizado.id) {
            return vendehumoActualizado
          }
          return vendehumo
        })

        this.listaVendehumos = listaActualizada
      })
  }

}
