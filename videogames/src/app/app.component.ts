import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideogameComponent } from "./videogame/videogame.component";
import { VideogamesService } from './videogames.service';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { AcquistatoComponent } from './acquistato/acquistato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideogameComponent, PrenotazioneComponent, AcquistatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'videogames';
  private videogamesService: VideogamesService = inject(VideogamesService);
  isOpenBookingModal: boolean = false;
  isOpenPurchaseModal: boolean = false;
  videogames = this.videogamesService.getVideogames();
  gameTitle!: string;


  get allVideogames() {

    return this.videogamesService.getVideogames();
  }

  /* opne/close booking modal */
  onClosed() {
    this.isOpenBookingModal = !this.isOpenBookingModal;
  }

  /* opne/close purchase modal */
  handlePurchase() {
    this.isOpenPurchaseModal = !this.isOpenPurchaseModal;

  }

  onSelectedGame(title: string) {
    this.gameTitle = title;
    
  }



}
