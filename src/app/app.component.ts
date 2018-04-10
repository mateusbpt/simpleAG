import { Component } from '@angular/core';
import { AlgoritmoGeneticoService } from '../app/services/algoritmo-genetico.service';
import { Individuo } from './models/individuo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public populacao : Array<Individuo>;

  constructor(private algoritmoGenericoService: AlgoritmoGeneticoService) {
    this.gerarNovaPopulacao();
  }

  public gerarNovaPopulacao() : void {
    this.algoritmoGenericoService.criaPopulacao();
    this.algoritmoGenericoService.calculaFitness();
    this.populacao = this.algoritmoGenericoService.getPopulacao();
  }

}
