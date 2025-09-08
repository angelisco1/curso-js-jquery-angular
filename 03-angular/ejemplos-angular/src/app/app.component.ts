import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cmp01DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
