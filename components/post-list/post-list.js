import { getPosts } from "../../api/posts.js";

const templateHTML = `
<link rel="stylesheet" href="./styles/reset.css">

<style>
:host {
    width: 700px;
    margin: 0 auto;
    display: block;
}

:host > ::slotted(blog-post) {
    margin: 20px 0;
}
</style>

<slot id="container"></slot>
`
const template = document.createElement('template')
template.setAttribute('id', 'post-list-template')
template.innerHTML = templateHTML
document.body.appendChild(template)

class PostListElement extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('post-list-template')
        const shadow = this.attachShadow({ mode: 'open' })
        if (template != null) {
            shadow.appendChild(template.content.cloneNode(true))
        } else {
            shadow.innerHTML = '<b style="color: white">Define post-list template!</b>'
        }
    }

    connectedCallback() {
        getPosts()
            .then(({ data: fetchedPosts }) => {
                if (fetchedPosts.length > 0) {
                    const posts = fetchedPosts.map((post) => {
                        const blogPostElement = document.createElement('blog-post')

                        blogPostElement.innerHTML = `
                            <span slot="title">${post.title}</span>
                            <span slot="content">${post.content}</span>
                            <span slot="positive-reaction">${post.positive}</span>
                            <span slot="negative-reaction">${post.negative}</span>
                            <a href="/posts/${post.id}" class="button" slot="open-link">Open</a>
                        `

                        return blogPostElement
                    })

                    this.append(...posts)
                } else {
                    this.innerHTML = `<b style="color: white">There is no any posts!</b>`
                }
            })
    }
}

customElements.define('post-list', PostListElement)
