import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Prenotazione } from '../models/prenotazione.model';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {

  constructor() { }

    private httpClient = inject(HttpClient)

     public fetchPrenot() {
        return this.httpClient.get<Prenotazione[]>('http://localhost:3000/prenotazioni');
      }
    
     
      public addPrenot( body:any){
        return this.httpClient.post('http://localhost:3000/prenotazioni', body);
      }
  
}
