import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    //private negociacoes: Negociacao[] = [] <--- other option of implementation;
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    //lista(): readonly Negociacao[] {  <--- other option of implementation
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}

