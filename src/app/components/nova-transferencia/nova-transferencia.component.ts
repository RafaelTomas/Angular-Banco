import { Transferencia } from '../../models/transferencia.model';
import { TransferenciasService } from '../../service/transferencias.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent  {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciasService, private router: Router){}

  transferir(): void {
    const valorEmitido: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }

    this.service.adicionar(valorEmitido).subscribe(result => {
     this.limparFormulario();
     this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error))
  }

  limparFormulario(){
    this.destino = 0;
    this.valor = 0;
  }
}
