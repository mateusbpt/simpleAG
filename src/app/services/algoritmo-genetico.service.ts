import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { Individuo } from '../models/individuo';

@Injectable()
export class AlgoritmoGeneticoService {

  private populacao : Array<Individuo>;

  public criaPopulacao() : void {
    this.populacao = new Array<Individuo>();
    for (let i = 0; i < AppConstants.tamanhoPopulacao; i++) {
      let valor1 : number = ((this.valorRandomico() / AppConstants.maxRange) * AppConstants.range) - AppConstants.rangeOffset;
      let valor2 : number = ((this.valorRandomico() / AppConstants.maxRange) * AppConstants.range) - AppConstants.rangeOffset;
      this.populacao.push(new Individuo(valor1, valor2));
    }
  }

  public calculaFitness() : void {
    this.populacao.forEach(i => {
      let fitness : number = (i.getVarFuncao1() * i.getVarFuncao1()) + (i.getVarFuncao2() * i.getVarFuncao2());
      i.setFitness(fitness);
    });
  }

  

  public getPopulacao() : Array<Individuo> {
    console.log(this.pegaMenorIndividuo());
    return this.populacao;
  }

  private pegaMenorIndividuo() : Individuo {
    const aux : Array<Individuo> = this.populacao;
    return aux.sort((i, j) =>  i.getFitness() - j.getFitness())[0];
  }

  private valorRandomico() : number {
    // Gera um valor randômico de 1 a 30000
    return (Math.random() * AppConstants.maxRange) + 1;
  }

}
