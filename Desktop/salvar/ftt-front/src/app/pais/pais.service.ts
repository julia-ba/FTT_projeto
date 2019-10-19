import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/pais/pais';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  url = `${environment.urlApi}/pais`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.url}`);
  }
  findById(id: number): Observable<Pais>{
    return this.http.get<Pais>(`${this.url}/${id}`);
  }
  save(pais: Pais): Observable<Pais>{
    if(pais.id){
      return this.http.put<Pais>(`${this.url}`, JSON.stringify(pais), httpOptions);
    } else {
      return this.http.post<Pais>(`${this.url}`, JSON.stringify(pais),httpOptions);
    }
  }
  deleteById(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }


}
