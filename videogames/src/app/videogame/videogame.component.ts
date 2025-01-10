import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { videogame } from '../videogame.model';

@Component({
  selector: 'app-videogame',
  standalone: true,
  imports: [],
  templateUrl: './videogame.component.html',
  styleUrl: './videogame.component.css'
})
export class VideogameComponent {

@Input({ required: true })videogame!: videogame;
@Output() bookingOpen = new EventEmitter();
@Output() purchaseOpen = new EventEmitter();
@Output() onSelectedGame = new EventEmitter();


handleBookingModal(){
  this.bookingOpen.emit();
}

handlePurchaseModal(){
  this.purchaseOpen.emit();
}

onSelectGame(title: string) {
  this.onSelectedGame.emit(title);
  
  
}

}

