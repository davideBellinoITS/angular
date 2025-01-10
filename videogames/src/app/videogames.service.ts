import { Injectable } from '@angular/core';
import { LISTA_VIDEOGAMES } from './LISTA_VIDEOGAMES';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  constructor() { }

  videogames = LISTA_VIDEOGAMES;

  getVideogames() {
    return this.videogames;
  }

  // getVideogame(id: number) {
  //   return this.videogames.find(videogame => videogame.id === id);
  // }




}
