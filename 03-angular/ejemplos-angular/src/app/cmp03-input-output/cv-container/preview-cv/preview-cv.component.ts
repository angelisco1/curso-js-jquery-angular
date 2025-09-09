import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-cv',
  imports: [],
  templateUrl: './preview-cv.component.html',
  styleUrl: './preview-cv.component.css'
})
export class PreviewCvComponent {
  @Input() nombreCompleto: string = ''
  @Input() email: string = ''

}
