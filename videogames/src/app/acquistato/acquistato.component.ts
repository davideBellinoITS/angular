import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-acquistato',
  standalone: true,
  imports: [],
  templateUrl: './acquistato.component.html',
  styleUrl: './acquistato.component.css'
})
export class AcquistatoComponent {

  @Output() handlePurchaseClose = new EventEmitter<void>();
  @Input() gameTitle!: string;


  onClose(){
    this.handlePurchaseClose.emit();
   
  }

}
