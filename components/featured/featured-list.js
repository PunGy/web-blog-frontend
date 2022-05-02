const templateHTML = `
<link rel="stylesheet" href="./styles/reset.css">
<link rel="stylesheet" href="./components/featured/featured-list.css">

<div id="header-container">
    <h3 id="header">Featured</h3>
</div>
<slot id="posts-list"></slot>
`
const template = document.createElement('template')
template.setAttribute('id', 'featured-list-template')
template.innerHTML = templateHTML
document.body.appendChild(template)

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
