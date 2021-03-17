const canvas = document.querySelector('canvas')
const context = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = 0
const renderBox = () => {
    if(x < canvas.width) {
        x = x + 3
    } else {
        x = 0
    }
    const y = 0
    const w = 50
    const h = 50
    context.fillStyle = '#FFF'
    context.fillRect(0, 0, window.innerWidth, window.innerHeight)
    context.fillStyle = '#000'
    context.fillRect(x, y, w, h)
    requestAnimationFrame(renderBox)
}

requestAnimationFrame(renderBox)