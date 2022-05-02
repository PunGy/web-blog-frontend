class BlogPostElement extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('post-template')

        const shadow = this.attachShadow({ mode: 'open' })
        if (template != null) {
            shadow.appendChild(template.content.cloneNode(true))
        } else {
            shadow.innerHTML = '<b style="color: white">Define blog-post template!</b>'
        }
    }
}

customElements.define('blog-post', BlogPostElement)