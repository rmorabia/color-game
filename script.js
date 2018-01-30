var r = 0
var g = 0
var b = 0

function randomRGB () {
  r = Math.floor(Math.random() * 256)
  g = Math.floor(Math.random() * 256)
  b = Math.floor(Math.random() * 256)
}

document.getElementById('colorButton').addEventListener('click', function () {
  randomRGB()
  document.getElementById('colorText').innerHTML = 'rgb(' + r + ',' + g + ',' + b + ')'
  document.getElementById('viewColor').style.color = 'rgb(' + r + ',' + g + ',' + b + ')'
})
