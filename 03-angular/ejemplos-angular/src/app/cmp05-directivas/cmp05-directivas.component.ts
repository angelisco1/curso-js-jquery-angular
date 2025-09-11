import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp05-directivas',
  imports: [
    NgStyle,
    NgClass,
    FormsModule,
  ],
  templateUrl: './cmp05-directivas.component.html',
  styleUrl: './cmp05-directivas.component.css'
})
export class Cmp05DirectivasComponent {
  tarea = {
    texto: "Ir a limpiar el coche",
    completada: true
  }

  listaTareas = [
    { id: 1, texto: "Cambiar la bombilla", completada: false },
    { id: 2, texto: "Ir a limpiar el coche", completada: false },
    { id: 3, texto: "Pagar la luz", completada: true },
    { id: 4, texto: "Visitar a Pacomé", completada: false },
  ]

  listaSeguimientoAcciones = [
    { ticker: 'GOOG', accion: 'Alphabet', precio: 200, recomendacion: true },
    { ticker: 'APPL', accion: 'Apple', precio: 240, recomendacion: true },
    { ticker: 'AMZN', accion: 'Amazon', precio: 419, recomendacion: false },
    { ticker: 'META', accion: 'Meta', precio: 500, recomendacion: false },
  ]


  notaMates: number = 8

  mascotaSeleccionada = 'canario'

  // 👋
  opcionesMascotas = [
    { valor: "no", texto: "No tengo" },
    { valor: "periquito", texto: "Periquito" },
    { valor: "canario", texto: "Canario" },
    { valor: "ninfa", texto: "Ninfa" },
  ]

  toggleCompletada() {
    this.tarea.completada = !this.tarea.completada
  }

  hacerTarea(hecha: boolean) {
    this.tarea.completada = hecha
  }

  vaciarListaSeguimiento() {
    this.listaSeguimientoAcciones = []
  }
}
