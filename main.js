customElements.define('wc-iframe',
    class extends HTMLElement {
        constructor() {
            super();

            // Create a shadow root
            const shadow = this.attachShadow({mode: 'open'});
            const url = this.getAttribute('data-url');
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', url);
            shadow.appendChild(iframe);
        }
    }
)

