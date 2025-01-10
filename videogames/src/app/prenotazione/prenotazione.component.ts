import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-prenotazione',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prenotazione.component.html',
  styleUrl: './prenotazione.component.css'
})
export class PrenotazioneComponent {
  @Output() handleClose = new EventEmitter<void>();
  @Input() gameTitle!: string;
 
  
  closeModal() {
    this.handleClose.emit();
    console.log("sto chiudendo modale");
  }
  
  onSubmit(formData: NgForm) {
    console.log('informazioni prenotazione' + formData);
    console.log(formData);

    /*     leggo i dati del form leggendo le prop
    del macro oggetto form che è stato appena costruito */

    const nome = formData.form.value.nome;
    const cognome = formData.form.value.cognome;
    const email = formData.form.value.email;
    const indirizzo = formData.form.value.indirizzo;
    console.log(nome, cognome, email, indirizzo);

    if (!formData.form.valid) {
      return;
    } else {
      console.log(nome, cognome, email, indirizzo);
    }

    formData.form.reset();
  }
  
}
