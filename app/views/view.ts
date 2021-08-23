export abstract class View<T> {
    
    protected elemento: HTMLLIElement;
    private escapar: boolean = false;

    constructor (seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLLIElement;
        } else {
            throw Error(`Seletor ${seletor} não encontrado no DOM`)
        }
        
        escapar? this.escapar = escapar: this.escapar = false;
    }

    update(model: T):void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}