class Cards extends HTMLElement {

    constructor() {
        super();
    }
    connectedCallback() {

        const imgSrc = this.getAttribute('img-src') || 'placeholder.jpg';
        const imgAlt = this.getAttribute('img-alt') || 'Experience Image'; 
        const description = this.getAttribute('description') || 'Experience description';
        const link = this.getAttribute('link') || '#';
        this.innerHTML = `
      <article>
        <header class="card-title">
          <h2>${title}</h2>
        </header>
        <figure class="card-image">
          <img src="${imgSrc}" alt="${imgAlt}">
        </figure>
        <section class="card-description">
          <p>${description}</p>
        </section>
        <div class="card-footer">
          <a href="${link}" target="_blank">Visit site</a>
        </div>
      </article>
      `;
    }
}
customElements.define('experience-card', Cards);