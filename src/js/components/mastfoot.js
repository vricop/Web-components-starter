class PrefixMastFoot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const currentYear = new Date().getFullYear();

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/assets/css/main.min.css"/>

      <style>
        :host { display: bloc; }
      </style>

      <div>
        <footer class="container mx-auto px-3">
          <p>&copy;${currentYear}</p>
        </footer>
      </div>
    `;
  }
}

customElements.define('prefix-mastfoot', PrefixMastFoot);