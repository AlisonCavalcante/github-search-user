import { Constantes } from './../../shared/Constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubPerfilService {

  constructor(private http: HttpClient) { }

  getPerfilUser(userName: string): Observable<any> {
    return this.http.get(Constantes.URL_PERFIL_USERS + userName);
  }
}
