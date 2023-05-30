import "./components/export"
import { dispatch } from "./store";
import { getCandidates } from "./store/actions";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        dispatch(await getCandidates())
        this.render()
    }

    render() {
        const form = this.ownerDocument.createElement('my-form');
        const cards = this.ownerDocument.createElement('my-candidates');

        this.shadowRoot?.appendChild(form);
        this.shadowRoot?.appendChild(cards);
    }
}

customElements.define('app-container', AppContainer)