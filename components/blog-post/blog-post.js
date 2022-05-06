
import { getTemplateContent, createTemplate } from "../../helpers/component.js";

createTemplate('post-template', `
<link rel="stylesheet" href="./styles/reset.css">
<link rel="stylesheet" href="./components/blog-post/post.css">
<link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />

<section>
    <div id="header-container">
        <h3 id="header"><slot name="title">Title</slot></h3>
    </div>
    <div id="content-container">
        <p id="content"><slot name="content">Content</slot></p>
    </div>
    <div id="footer-container">
        <div id="reactions-list">
            <div class="reaction__container" id="reaction-positive-container">
                <span class="reactions__counter" id="reaction-positive-counter">
                    <slot name="positive-reaction">0</slot>
                </span>
                <button class="reaction__button" id="reaction-positive-button"><span class="material-symbols-outlined">thumb_up</span></button>
            </div>
            <div class="reaction__container" id="reaction-negative-container">
                <span class="reactions__counter" id="reaction-negative-counter">
                    <slot name="negative-reaction">0</slot>
                </span>
                <button class="reaction__button" id="reaction-negative-button"><span class="material-symbols-outlined">thumb_down</span></button>
            </div>
        </div>
        <div id="open-container">
            <slot name="open-link" id="open">open</slot>
        </div>
    </div>
</section>
`)

class BlogPostElement extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' })
        const content = getTemplateContent('post-template')
        shadow.appendChild(content)
    }
}

customElements.define('blog-post', BlogPostElement)