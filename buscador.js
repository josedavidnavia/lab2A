
export default class Buscador extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = ` 
        <div class="centered-content">
        <header>
        <div class="header-content">
            <img src="Firefox_logo.png" alt="Firefox Logo">
            <h1> Firefox</h1>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Buscar en la web...">
            
        </div>
    </header>
    </div>
    <link rel="stylesheet" href="styles.css">`;
    }

}

customElements.define("app-buscador", Buscador);