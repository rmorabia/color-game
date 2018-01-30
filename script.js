var r = 0
var g = 0
var b = 0

var colorBlocks = [0, 1, 2, 3, 4, 5]
var rgbArray = []

colorBlocks[0] = document.getElementById('viewColor1')
colorBlocks[1] = document.getElementById('viewColor2')
colorBlocks[2] = document.getElementById('viewColor3')
colorBlocks[3] = document.getElementById('viewColor4')
colorBlocks[4] = document.getElementById('viewColor5')
colorBlocks[5] = document.getElementById('viewColor6')

function randomRGB () {
  r = Math.floor(Math.random() * 256)
  g = Math.floor(Math.random() * 256)
  b = Math.floor(Math.random() * 256)
}

function correctBlock () {
  var num = (Math.floor(Math.random() * 5))
  document.getElementById('colorText').textContent = rgbArray[num]
}

document.getElementById('colorButton').addEventListener('click', function () {
  for (var i = 0; i < colorBlocks.length; i++) {
    randomRGB()
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')'
    colorBlocks[i].style.color = rgb
    rgbArray.push(rgb)
  }
  correctBlock();
})