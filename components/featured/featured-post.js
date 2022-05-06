
import { getTemplateContent, createTemplate } from "../../helpers/component.js";

createTemplate('featured-post-template', `
<link rel="stylesheet" href="./styles/reset.css">
<link rel="stylesheet" href="./components/featured/featured-post.css">

<a href="" id="link">
    <h2 id="title"><slot></slot></h2>
    <div id="reaction-container">
        <span id="positive">0</span>
        <span id="negative">0</span>
    </div>
</a>

<slot id="featured-list"></slot>

`)

class FeaturedPostElement extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' })
        const content = getTemplateContent('featured-post-template')
        shadow.appendChild(content)
    }
};


customElements.define('featured-post', FeaturedPostElement)
