class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/assets/css/main.min.css">

      <div className="container mx-auto mx-3">
        <header>Header</header>
      </div>
    `;
  }
}

customElements.define('c-header', Header);
