import { TransferenciasService } from '../../service/transferencias.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit  {
  @Input() transferencias: any[] = [];

  constructor(private service: TransferenciasService) { }

  ngOnInit(): void {
    this.service.todasTransferencias().subscribe((transferencias: Transferencia[]) => {
      console.log(transferencias)
      this.transferencias = transferencias;
    })
  }

}
