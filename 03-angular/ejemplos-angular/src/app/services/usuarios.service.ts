import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, Usuarios } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'https://jsonplaceholder.typicode.com/users'

  constructor(
    private http: HttpClient,
  ) { }

  getUsuarios(): Observable<Usuarios> {
    return this.http.get<Usuarios>(this.url)
  }

  createUsuario(usuario: Partial<Usuario>): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario)
  }
}
