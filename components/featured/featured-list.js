class FeaturedListElement extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('featured-list-template')
        const shadow = this.attachShadow({ mode: 'open' })
        if (template != null) {
            shadow.appendChild(template.content.cloneNode(true))
        } else {
            shadow.innerHTML = '<b style="color: white">Define featured-list template!</b>'
        }
    }
}

customElements.define('featured-list', FeaturedListElement)
