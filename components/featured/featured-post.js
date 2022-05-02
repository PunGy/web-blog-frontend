class FeaturedPostElement extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('featured-post-template')
        const shadow = this.attachShadow({ mode: 'open' })
        if (template != null) {
            const content = template.content.cloneNode(true)

            const positive = this.getAttribute('positive')
            const negative = this.getAttribute('negative')
            if (positive != null) content.querySelector('#positive').innerText = positive
            if (negative != null) content.querySelector('#negative').innerText = negative

            const href = this.getAttribute('href')
            if (href != null) content.querySelector('#link').setAttribute('href', href)

            shadow.appendChild(content)
        } else {
            shadow.innerHTML = '<b style="color: white">Define featured-post template!</b>'
        }
    }
}

customElements.define('featured-post', FeaturedPostElement)
