import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/usuario/usuario';


  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  @Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {

    url = `${environment.urlApi}/usuario`;

    constructor(private http: HttpClient) { }

    findAll(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(`${this.url}`);
    }
    findById(id: number): Observable<Usuario>{
      return this.http.get<Usuario>(`${this.url}/${id}`);
    }
    save(usuario: Usuario): Observable<Usuario>{
      if(usuario.id){
        return this.http.put<Usuario>(`${this.url}/${usuario.id}`, JSON.stringify(usuario), httpOptions);
      } else {
        return this.http.post<Usuario>(`${this.url}`, JSON.stringify(usuario),httpOptions);
      }
    }
    deleteById(id: number): Observable<any>{
      return this.http.delete(`${this.url}/${id}`);
    }


}