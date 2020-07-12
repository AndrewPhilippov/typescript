const button = document.querySelector('button')

function add(n1: number, n2: number) {
    debugger
    if (n1 + n2 > 0) {
        return n1 + n2
    }
    return
}

function clickHandler(message: string) {
    console.log('clicked', message)
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'bom-booooom'))
}