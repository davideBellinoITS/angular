import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Corso } from '../../models/corso.model';
import { CorsiService } from '../../services/corsi.service';
import { PrenotazioniService } from '../../services/prenotazioni.service';

@Component({
  selector: 'app-modale-iscrizione-corso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modale-iscrizione-corso.component.html',
  styleUrl: './modale-iscrizione-corso.component.css'
})
export class ModaleIscrizioneCorsoComponent {

  corso = input.required<Corso>();
  private corsiService = inject(CorsiService)
  private prenotazioniService = inject(PrenotazioniService)




  closeSubscribeModal = output();
  onSubscribe = output();

  emptyForm = false;

  onCloseSubscribeModal() {
    this.closeSubscribeModal.emit();
  }


  subscriptionForm = new FormGroup({

    nomeUtente: new FormControl('', {
      validators: [
        Validators.required],
    }),
    cognomeUtente: new FormControl('', {
      validators: [
        Validators.required],
    }),

  });


  get isNameValid() {
    return this.subscriptionForm.controls.nomeUtente.invalid && this.subscriptionForm.controls.nomeUtente.touched;
  }
  get isSurnameValid() {
    return this.subscriptionForm.controls.cognomeUtente.invalid && this.subscriptionForm.controls.cognomeUtente.touched;
  }

  onSubmit() {
    if (this.subscriptionForm.invalid) {
      console.log('Il form non è valido!');
      console.log(this.subscriptionForm);
      this.emptyForm = true;
      return

    }
    this.emptyForm = false;

    this.onSubscribe.emit();
    this.closeSubscribeModal.emit();

    console.log('form inviato');

    console.log(this.subscriptionForm.value);
    const formData = {
      ...this.subscriptionForm.value,
      nomeCorso: this.corso().nome,
    };


    if (this.corso().iscritti < this.corso().capacitaMax) {
      const newIscritto = this.corso().iscritti + 1;
      this.corsiService.modifyCorso(this.corso().id, { iscritti: newIscritto })
        .subscribe({
          next: (data) => {
            console.log(data)
            this.corso().iscritti = newIscritto;

          }

        })

      this.prenotazioniService.addPrenot(formData)
        .subscribe({
          next: (data) => {
            console.log(data)

          }

        })
    }
    console.log(this.corso().iscritti);

    if (this.corso().iscritti == this.corso().capacitaMax - 1) {
      this.corso().disponibilita = false;

      this.corsiService.modifyCorso(this.corso().id, { disponibilita: false })
        .subscribe({
          next: (data) => {
            console.log(data);
          }
        })
    }







  }


}
