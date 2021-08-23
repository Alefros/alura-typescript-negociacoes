export class View<T> {
    
    protected elemento: HTMLLIElement;

    constructor (seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: T):void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    template(model: T): string{
        throw Error('Classe filha deve sobrescrever o template');
    }
}