import { Component, OnInit } from '@angular/core';
import { VendehumosService } from '../../services/vendehumos.service';
import { Vendehumos } from '../../types/vendehumo.model';
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



}
