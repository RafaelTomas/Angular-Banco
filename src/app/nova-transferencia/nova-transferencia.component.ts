import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent  {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir():void {
    console.log('Transferindo...');
    const valorEmitido = {
      valor: this.valor,
      destino: this.destino
    }

    this.aoTransferir.emit(valorEmitido);
    this.limparFormulario()
  }

  private limparFormulario(){
    this.destino = 0;
    this.valor = 0;
  }
}
