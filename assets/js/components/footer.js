class prefixFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.buildFooterMarkup();
  }

  buildFooterMarkup() {
    const currentYear = new Date().getFullYear();

    return `
      <div>
        <footer className="container mx-auto px-3">
          <p>&copy;${currentYear}</p>
        </footer>
      </div>
    `;
  }

  //   connectedCallback() {}

  //   static get observedAttributes() {
  //     return [''];
  //   }

  //   attributeChangedCallback(name, oldValue, newValue) {
  //     if(newValue != oldValue) {
  //       /* Listen for changes */
  //     }
  //   }

  //   get attributeName() {
  //     return this.getAttribute('attributeName');
  //   }

  //   set attributeName(val) {
  //     this.setAttribute('attributeName', val)
  //   }
}

customElements.define('prefix-footer', prefixFooter);
