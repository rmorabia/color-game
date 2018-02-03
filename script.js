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

function randomRGB() {
  r = Math.floor(Math.random() * 256)
  g = Math.floor(Math.random() * 256)
  b = Math.floor(Math.random() * 256)
}

function correctBlock() {
  var num = (Math.floor(Math.random() * 6))
  document.getElementById('colorText').textContent = rgbArray[num]
}

function generateColors() {
  for (var i = 0; i < colorBlocks.length; i++) {
    randomRGB();
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')'
    colorBlocks[i].style.color = rgb
    rgbArray.push(rgb)
  }
  correctBlock();
}

document.getElementById('colorButton').addEventListener('click', function () {
  rgbArray.length = 0
  generateColors();
})

window.onload = function () {
  generateColors();
}

colorBlocks[0].addEventListener('click', function () {
  if (rgbArray[0] == document.getElementById('colorText').textContent) {
    console.log('u win')
    colorBlocks.forEach(function (num){
      num.style.color = document.getElementById('colorText').textContent
    })
  } else {
    console.log('no')
    colorBlocks[0].style.color = 'rgb(0,0,0)'
  }
})

colorBlocks[1].addEventListener('click', function () {
  if (rgbArray[1] == document.getElementById('colorText').textContent) {
    colorBlocks.forEach(function (num){
      num.style.color = document.getElementById('colorText').textContent
    })
  } else {
    colorBlocks[1].style.color = 'rgb(0,0,0)'
  }
})

colorBlocks[2].addEventListener('click', function () {
  if (rgbArray[2] == document.getElementById('colorText').textContent) {
    colorBlocks.forEach(function (num){
      num.style.color = document.getElementById('colorText').textContent
    })
  } else {
    colorBlocks[2].style.color = 'rgb(0,0,0)'
  }
})

colorBlocks[3].addEventListener('click', function () {
  if (rgbArray[3] == document.getElementById('colorText').textContent) {
    colorBlocks.forEach(function (num){
      num.style.color = document.getElementById('colorText').textContent
    })
  } else {
    colorBlocks[3].style.color = 'rgb(0,0,0)'
  }
})

colorBlocks[4].addEventListener('click', function () {
  if (rgbArray[4] == document.getElementById('colorText').textContent) {
    colorBlocks.forEach(function (num){
      num.style.color = document.getElementById('colorText').textContent
    })
  } else {
    colorBlocks[4].style.color = 'rgb(0,0,0)'
  }
})

colorBlocks[5].addEventListener('click', function () {
  if (rgbArray[5] == document.getElementById('colorText').textContent) {
    colorBlocks.forEach(function (num){
      num.style.color = document.getElementById('colorText').textContent
    })
  } else {
    colorBlocks[5].style.color = 'rgb(0,0,0)'
  }
})