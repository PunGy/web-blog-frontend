import { getFeaturedPost } from "../../api/posts.js";
import { getTemplateContent, createTemplate } from "../../helpers/component.js";

createTemplate('featured-list-template', `
<link rel="stylesheet" href="./styles/reset.css">
<link rel="stylesheet" href="./components/featured/featured-list.css">

<div id="header-container">
    <h3 id="header">Featured</h3>
</div>
<slot id="posts-list"></slot>
`)

class FeaturedListElement extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' })
        const content = getTemplateContent('featured-list-template')
        shadow.appendChild(content)
    }
    connectedCallback() {
        getFeaturedPost()
            .then(({ data: fetchedPosts }) => {
                if (fetchedPosts.length > 0) {
                    const posts = fetchedPosts.map((post) => {
                        const FeaturedPostElement = document.createElement('featured-post')
                        FeaturedPostElement.setAttribute('href', post.link)
                        FeaturedPostElement.setAttribute('positive', post.positive)
                        FeaturedPostElement.setAttribute('negative', post.negative)
                        FeaturedPostElement.innerText = post.title

                        return FeaturedPostElement
                    })

                    this.append(...posts)
                } else {
                    this.innerHTML = `<b style="color: white">There is no any posts!</b>`
                }
            })
    }
}

customElements.define('featured-list', FeaturedListElement)
