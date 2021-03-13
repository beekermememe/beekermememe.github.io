customElements.define(
    "simple-custom",
    class extends HTMLElement {
        constructor() {
            super();

            const divElem = document.createElement("div");
            console.log('Div text ' + this.getAttribute("text"));
            divElem.textContent = this.getAttribute("text");

            const iframe = document.createElement("iframe");
            iframe.src = "https://google.com";
            divElem.appendChild(iframe);
            const shadowRoot = this.attachShadow({ mode: "closed" });
            shadowRoot.appendChild(divElem);
        }
    }
);
