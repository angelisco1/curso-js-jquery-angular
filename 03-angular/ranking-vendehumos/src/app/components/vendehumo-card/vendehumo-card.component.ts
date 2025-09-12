import { Component, Input } from '@angular/core';
import { Vendehumo } from '../../types/vendehumo.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vendehumo-card',
  imports: [RouterLink],
  templateUrl: './vendehumo-card.component.html',
  styleUrl: './vendehumo-card.component.css'
})
export class VendehumoCardComponent {
  @Input() vendehumo: Vendehumo | null = null
}
