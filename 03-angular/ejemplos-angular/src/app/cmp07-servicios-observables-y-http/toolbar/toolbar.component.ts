import { Component } from '@angular/core';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  selectedLanguage: string = "es"

  constructor(
    private idiomaService: IdiomaService,
  ) { }

  ngOnInit() {
    this.idiomaService.changeIdioma(this.selectedLanguage)
  }

  // ngAfterViewInit() {
  //   this.idiomaService.changeIdioma(this.selectedLanguage)
  // }

  cambiarIdioma(event: Event) {
    this.selectedLanguage = (event.target as HTMLSelectElement).value
    this.idiomaService.changeIdioma(this.selectedLanguage)
  }

}
