export class Negociacoes {
    constructor() {
        //private negociacoes: Negociacao[] = [] <--- other option of implementation;
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista(): readonly Negociacao[] {  <--- other option of implementation
    lista() {
        return this.negociacoes;
    }
}
