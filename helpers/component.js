export function createTemplate(id, html) {
    const template = document.createElement('template')
    template.setAttribute('id', id)
    template.innerHTML = html
    document.body.appendChild(template)
}

export function getTemplateContent(id) {
    const template = document.getElementById(id)

    if (template == null) {
        const fallbackElement = document.createElement('b')
        fallbackElement.innerText = `Define ${id}!`

        return fallbackElement
    } else {
        return template.content.cloneNode(true)
    }
}
