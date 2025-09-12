import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VendehumosService } from '../../services/vendehumos.service';
import { Router } from '@angular/router';
import { Vendehumo } from '../../types/vendehumo.model';

@Component({
  selector: 'app-nuevo-vendehumo',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './nuevo-vendehumo.component.html',
  styleUrl: './nuevo-vendehumo.component.css'
})
export class NuevoVendehumoComponent implements OnInit {
  form: FormGroup | null = null

  constructor(
    private vendehumosService: VendehumosService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      url: new FormControl('avatares/63.jpg'),
      numVotos: new FormControl(0),
    })
  }

  guardar() {
    this.vendehumosService.crearVendehumo(this.form?.value)
      .subscribe((vendehumo: Vendehumo) => {
        this.router.navigate(['/vendehumos', vendehumo.id])
        // this.router.navigateByUrl('/home')
      })
  }
}
