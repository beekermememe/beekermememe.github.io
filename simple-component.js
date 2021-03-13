customElements.define(
    "simple-custom",
    class extends HTMLElement {
        constructor() {
            super();

            const divElem = document.createElement("div");
            console.log('Div text ' + this.getAttribute("text");
            divElem.textContent = this.getAttribute("text");

            const shadowRoot = this.attachShadow({ mode: "closed" });
            shadowRoot.appendChild(divElem);
        }
    }
);
