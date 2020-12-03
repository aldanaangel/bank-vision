import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  URL = 'http://localhost:8060/api';
  constructor( private _httpClient: HttpClient) { }

  getPersonas(){
    return this._httpClient.get<Persona[]>(this.URL + '/list');
  }
  createPersona(persona: Persona){
    return this._httpClient.post<Persona>(this.URL + '/add', persona);
  }
  getPersonasId( id: number ){
    return this._httpClient.get<Persona>(this.URL + '/' + id);
  }
  updatePersona(persona: Persona){
    return this._httpClient.put<Persona>(this.URL + '/' + persona.id, persona);
  }
  deletePersona(persona: Persona){
    return this._httpClient.delete<Persona>(this.URL + '/' + persona.id );
  }
}
