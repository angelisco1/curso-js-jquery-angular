import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendehumo, Vendehumos } from '../types/vendehumo.model';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {
  private url: string = "http://localhost:3000/vendehumos"

  constructor(
    private http: HttpClient,
  ) { }


  getVendehumos(): Observable<Vendehumos> {
    return this.http.get<Vendehumos>(this.url)
  }

  getVendehumosById(id: number): Observable<Vendehumo> {
    return this.http.get<Vendehumo>(`${this.url}/${id}`)
  }

  crearVendehumo(nuevoVendehumo: Partial<Vendehumo>): Observable<Vendehumo> {
    return this.http.post<Vendehumo>(this.url, nuevoVendehumo)
  }
}
