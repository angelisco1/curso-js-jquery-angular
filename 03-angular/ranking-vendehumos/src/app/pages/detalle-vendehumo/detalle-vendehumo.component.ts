import { Component, OnInit } from '@angular/core';
import { VendehumosService } from '../../services/vendehumos.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Vendehumo } from '../../types/vendehumo.model';
import { switchMap } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-detalle-vendehumo',
  imports: [JsonPipe],
  templateUrl: './detalle-vendehumo.component.html',
  styleUrl: './detalle-vendehumo.component.css'
})
export class DetalleVendehumoComponent implements OnInit {
  id: number | null = null
  vendehumo: Vendehumo | null = null

  constructor(
    private vendehumosService: VendehumosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // console.log(this.route)
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   console.log(params)
    //   this.id = Number(params.get('id'))

    //   this.vendehumosService.getVendehumosById(this.id)
    //     .subscribe((vendehumo: Vendehumo) => {
    //       console.log(vendehumo)
    //     })

    // })

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          console.log(params)
          this.id = Number(params.get('id'))

          return this.vendehumosService.getVendehumosById(this.id)
        })
      )
      .subscribe((vendehumo: Vendehumo) => {
        console.log(vendehumo)
        this.vendehumo = vendehumo
      })

  }

}
