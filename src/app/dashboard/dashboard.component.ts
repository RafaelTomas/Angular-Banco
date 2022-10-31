import { Infracao } from './../models/infracao.model';
import { Vacina } from './../models/vacinas.model';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { VacinaService } from '../service/vacinaService.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  infracoes: Infracao[];

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Cartão 1', cols: 1, rows: 1 },
          { title: 'Cartão 2', cols: 1, rows: 1 },
          { title: 'Cartão 3', cols: 1, rows: 1 },
          { title: 'Cartão 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Cartão 1', cols: 2, rows: 1 },
        { title: 'Cartão 2', cols: 1, rows: 1 },
        { title: 'Cartão 3', cols: 1, rows: 2 },
        { title: 'Cartão 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private vacinaService: VacinaService
    ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    const vacinaLog = this.vacinaService.listar().subscribe((res) => {
      console.log(res, 'thomas');
      this.infracoes = res.result.records;
    });
  }
}
