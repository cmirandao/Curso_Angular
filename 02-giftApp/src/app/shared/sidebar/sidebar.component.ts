import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
 // @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  get historial(){
    return this.gifsService.historial;
  }

  constructor(private gifsService:GifsService) { }

  buscar(termino:string){
    this.gifsService.buscarGifs(termino);
  }

}
