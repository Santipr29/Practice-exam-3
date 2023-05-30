import { addObserver, appState } from "../../store";

export default class CandidatesList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML=""
        const container = this.ownerDocument.createElement('section');

        appState.candidates.forEach((p)=>{
            const card = this.ownerDocument.createElement('section');

            const name = this.ownerDocument.createElement("h2")
            name.innerText = p.name

            const match = this.ownerDocument.createElement("p")
            match.innerText = p.match

            card.appendChild(name)
            card.appendChild(match)

            container.appendChild(card)
        })
        
        this.shadowRoot?.appendChild(container);
    }
}

customElements.define('my-candidates', CandidatesList)