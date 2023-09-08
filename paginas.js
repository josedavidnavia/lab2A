export default class Paginas extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }

    connectedCallback(){
        this.render ();
    }

    render(){
        this.shadowRoot.innerHTML = `<main>
        <section class="favorites">
        
            <ul>
               
                <li>
                    <a href="https://www.facebook.com">
                        <img src="facebook-logo-3-1.png" alt="Facebook Logo">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com">
                        <img src="githud.png" alt="GitHub Logo">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.reddit.com">
                        <img src="reddit.png" alt="Reddit Logo">
                        Reddit
                    </a>
                </li>
                <li>
                    <a href="https://www.stackoverflow.com">
                        <img src="start.png" alt="Stack Overflow Logo">
                        Stack Overflow
                    </a>
                </li>
            </ul>
        </section>
    </main>
    <link rel="stylesheet" href="styles.css">`;
    }

}

customElements.define ("app-paginas", Paginas);