import { dispatch } from "../../store";
import { addCandidate } from "../../store/actions";
import { Candidate } from "../../types/candidate";

const candidate: Candidate = {
    name: "",
    match:"",
    createdAt:"",
}

export default class form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const container = this.ownerDocument.createElement("section")

        const name = this.ownerDocument.createElement("input")
        name.placeholder = "Nombre del candidato"
        name.type = "text"
        name.addEventListener("change", (e:any)=>{
            candidate.name = e.target.value
        })

        const match = this.ownerDocument.createElement("input")
        match.placeholder = "Partido que representa"
        match.type = "text"
        match.addEventListener("change", (e:any)=>{
            candidate.match = e.target.value
        })

        const sendbtn = this.ownerDocument.createElement("button")
        sendbtn.innerText = "Inscribirse"
        sendbtn.addEventListener("click", async ()=>{
            console.log(candidate)
            dispatch(await addCandidate(candidate))
        })

        container.appendChild(name)
        container.appendChild(match)
        container.appendChild(sendbtn)

        this.shadowRoot?.appendChild(container)
    }
}

customElements.define('my-form', form)