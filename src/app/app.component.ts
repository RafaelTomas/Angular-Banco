import { TransferenciasService } from './service/transferencias.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Banco';

  constructor(private service: TransferenciasService){}

  transferir($event){
    this.service.adicionar($event);
  }

}
