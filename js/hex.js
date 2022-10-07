document.getElementById('parent').style.textAlign = 'center'
document.getElementById('heading').style.marginBottom = '2em'

var body = document.getElementById('body')
var button = document.getElementById('button')
var hexValues = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F']
value = document.getElementById('hex-values')

body.style.backgroundColor = 'pink'
button.addEventListener('click', changeHex)

function changeHex() {
    let hex = "#"

    for ( i = 0; i < 6; i++) {
        hexChanger = Math.floor(Math.random()*hexValues.length)
        hex += hexValues[hexChanger]
    }
    value.textContent = hex
    body.style.backgroundColor = hex
}
