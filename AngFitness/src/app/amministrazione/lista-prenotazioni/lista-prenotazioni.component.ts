import { Component, inject, signal } from '@angular/core';
import { PrenotazioniService } from '../../services/prenotazioni.service';
import { Prenotazione } from '../../models/prenotazione.model';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {

  private prenotazioniService = inject(PrenotazioniService)

  prenotazioni = signal<Prenotazione[]>([])

  ngOnInit(): void {
    this.prenotazioniService.fetchPrenot()
      .subscribe({
        next: (data => {
          console.log(data)
          this.prenotazioni.set(data)
        })
      })
  }



}
