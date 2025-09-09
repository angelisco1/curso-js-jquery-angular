import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02ReferenciasComponent } from "./cmp02-referencias/cmp02-referencias.component";
import { Cmp03InputOutputComponent } from './cmp03-input-output/cmp03-input-output.component';

@Component({
  selector: 'app-root',
  imports: [Cmp01DataBindingComponent, Cmp02ReferenciasComponent, Cmp03InputOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
