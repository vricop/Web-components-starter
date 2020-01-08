class prefixMasthead extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.buildMastHeadMarkup();
  }

  buildMastHeadMarkup() {
    return `
      <link rel="stylesheet" href="assets/css/main.min.css">

      <div className="container mx-auto mx-3">
        <header>Header</header>
      </div>
    `;
  }

  // connectedCallback() {}

  // static get observedAttributes() {
  //   return [''];
  // }

  // attributeChangedCallback(name, oldValue, newValue) {
  //   if (newValue != oldValue) {
  //     /* Listen for changes */
  //   }
  // }

  // get attributeName() {
  //   return this.getAttribute('attributeName');
  // }

  // set attributeName(val) {
  //   this.setAttribute('attributeName', val);
  // }
}

customElements.define('prefix-masthead', prefixMasthead);
