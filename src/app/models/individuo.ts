export class Individuo {
    private varFuncao1: number;
    private varFuncao2: number;
    private fitness: number;

    public constructor (varFuncao1: number, varFuncao2: number, fitness: number = 0.0) {
        this.varFuncao1 = varFuncao1;
        this.varFuncao2 = varFuncao2;
        this.fitness = fitness;
    }

    public getFitness(): number {
        return this.fitness;
    }

    public setFitness(fitness: number) : void {
        this.fitness = fitness;
    }

    public getVarFuncao1(): number {
        return this.varFuncao1;
    }

    public setVarFuncao1(varFuncao1: number) : void {
        this.varFuncao1 = varFuncao1;
    }

    public getVarFuncao2(): number {
        return this.varFuncao2;
    }

    public setVarFuncao2(varFuncao2: number) : void {
        this.varFuncao2 = varFuncao2;
    }
  
}
