document.querySelector('div').style.textAlign = 'center'
document.querySelector('h1').style.marginBottom = '2em'

var body = document.querySelector('body')
var button = document.getElementById('button')
var hexValues = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F']
var value = document.getElementById('hex-values')

body.style.backgroundColor = 'gold'
button.addEventListener('click', generateHex)

function generateHex() {
    let hex = '#'
    for ( i = 0; i < 6; i++) {
       var hexGenerator = parseInt(Math.random()*hexValues.length)
        hex += hexValues[hexGenerator] 
    }
    value.textContent = hex
    body.style.backgroundColor = hex
}




