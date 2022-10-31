import { Vacina } from './../models/vacinas.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class VacinaService {
  private listaVacina: any[];
  private vacinasUrl = 'http://dados.recife.pe.gov.br/api/3/action/datastore_search?resource_id=e53a6842-0cd2-4a3c-9324-2904a35590b1&limit=5'

  constructor(private http: HttpClient) {
    this.listaVacina = [];
  }

  get vacinas() {
    return this.listaVacina;
  }

  listar() {
    return this.http.get<any>(`${this.vacinasUrl}`)
  }

}
