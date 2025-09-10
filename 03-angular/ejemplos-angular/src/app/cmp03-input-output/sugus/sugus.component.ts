import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-sugus',
  imports: [NgStyle],
  templateUrl: './sugus.component.html',
  styleUrl: './sugus.component.css'
})
export class SugusComponent {
  @Input() sabor: string = 'limón'
  @Input() color: string = 'yellow'

  constructor() {
    console.log("Constructor: ", this.sabor)
  }

  ngOnChanges(changes: any) {
    console.log("NgOnChanges: ", this.sabor, changes)
  }

  ngOnInit() {
    console.log("NgOnInit: ", this.sabor)
  }
}
