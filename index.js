import Buscador from "./buscador.js"; "./buscador.js";

import paginas from "./paginas.js";

console.log ("data");

class App extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }

    connectedCallback(){
        this.render ();
    }

    render(){
        this.shadowRoot.innerHTML = `<app-buscador></app-buscador> 
        <app-paginas></app-paginas>`;
    }

}

customElements.define ("app-container", App);
