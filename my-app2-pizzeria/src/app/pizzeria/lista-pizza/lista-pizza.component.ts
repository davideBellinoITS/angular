import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Pizza } from '../pizza/pizza.model';

@Component({
  selector: 'app-lista-pizza',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizza.component.html',
  styleUrl: './lista-pizza.component.css'
})
export class ListaPizzaComponent {

  @Input({required:true}) pizze!: Pizza[];

  @Output() selectPizza = new EventEmitter();



onSelectedPizza(id:number){
  //attraverso il canale selectPizza emetti (.emit) queste informazioni
  this.selectPizza.emit(id);
}


}
