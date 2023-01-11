import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'carolina';
  nombreUpper: string = 'CAROLINA';
  nombreCompleto: string = 'cArOlInA MirAnDa';

  fecha: Date = new Date(); //el dia de hoy
}
