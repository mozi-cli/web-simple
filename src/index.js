function component() {
    const element = document.createElement('div')
    element.innerHTML = 'Web Simple'
    return element
}

document.body.appendChild(component())
