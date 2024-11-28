import { Component } from '@angular/core';
import { ListaPizzaComponent } from "./lista-pizza/lista-pizza.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { DUMMY_PIZZA } from './DUMMY_PIZZA';
import { Pizza } from './pizza/pizza.model';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzaComponent, PizzaComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})
export class PizzeriaComponent {

pizze:Pizza[] = DUMMY_PIZZA;
idPizzaSelezionata!: number;
pizzaSelezionata!: any;

onSelectPizza(id: number){
  console.log('id pizza ' + id);
  this.idPizzaSelezionata = id;

  this.pizzaSelezionata = this.pizze.filter((pizza) => id === pizza.id);
 this.pizzaSelezionata = this.pizzaSelezionata.pop()
}

}
