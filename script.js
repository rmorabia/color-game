var r = 0
var g = 0
var b = 0

var hardMode = true

var colorBlocks = [0, 1, 2, 3, 4, 5]
var rgbArray = []
var easyBlocks = [0, 1, 2]

colorBlocks[0] = document.getElementById('viewColor1')
colorBlocks[1] = document.getElementById('viewColor2')
colorBlocks[2] = document.getElementById('viewColor3')
colorBlocks[3] = document.getElementById('viewColor4')
colorBlocks[4] = document.getElementById('viewColor5')
colorBlocks[5] = document.getElementById('viewColor6')

easyBlocks[0] = document.getElementById('viewColor1')
easyBlocks[1] = document.getElementById('viewColor2')
easyBlocks[2] = document.getElementById('viewColor3')

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
    randomRGB()
    var rgb = 'RGB(' + r + ', ' + g + ', ' + b + ')'
    colorBlocks[i].style.backgroundColor = rgb
    rgbArray.push(rgb)
  }
  correctBlock()
}

document.getElementById('colorButton').addEventListener('click', function () {
  rgbArray.length = 0
  // colorBlocks.forEach(function (num) {
  //   num.style.backgroundColor = 'RGB(0, 0, 0)'
  // })
  if (hardMode === true) {
    generateColors()
  } else if (hardMode === false) {
    easyMode()
  }
  document.querySelector('header').style.backgroundColor = '#32b643'
  document.getElementById('results').textContent = 'Click A Color'
})

window.onload = function () {
  generateColors()
  document.querySelector('#hardMode').classList.add("hardToggle")
}

document.getElementById('hardMode').addEventListener('click', function () {
  hardMode = true
  rgbArray.length = 0
  hardVisibility()
  generateColors()
  document.querySelector('header').style.backgroundColor = '#32b643'
  document.getElementById('results').textContent = 'Click A Color'
})

document.getElementById('easyMode').addEventListener('click', function () {
  easyMode()
  document.querySelector('header').style.backgroundColor = '#32b643'
  document.getElementById('results').textContent = 'Click A Color'
})

function easyMode() {
  hardMode = false
  rgbArray.length = 0
  for (var i = 0; i < easyBlocks.length; i++) {
    randomRGB();
    var rgb = 'RGB(' + r + ', ' + g + ', ' + b + ')'
    easyBlocks[i].style.backgroundColor = rgb
    rgbArray.push(rgb)
  }
  var num = (Math.floor(Math.random() * 3))
  document.getElementById('colorText').textContent = rgbArray[num]
  easyVisibility()
}

function easyVisibility() {
  document.querySelector('#viewColor4').style.visibility = "hidden"
  document.querySelector('#viewColor5').style.visibility = "hidden"
  document.querySelector('#viewColor6').style.visibility = "hidden"
  document.querySelector('#easyMode').classList.add("easyToggle")
  document.querySelector('#hardMode').classList.remove("hardToggle")
}

function hardVisibility() {
  document.querySelector('#viewColor4').style.visibility = "visible"
  document.querySelector('#viewColor5').style.visibility = "visible"
  document.querySelector('#viewColor6').style.visibility = "visible"
  document.querySelector('#hardMode').classList.add("hardToggle")
  document.querySelector('#easyMode').classList.remove("easyToggle")
}


colorBlocks[0].addEventListener('click', function () {
  if (rgbArray[0] == document.getElementById('colorText').textContent) {
    document.getElementById('results').textContent = "Correct"
    for (var i = 0; i < rgbArray.length; i++) {
      rgbArray[i] = document.getElementById('colorText').textContent
    }
    colorBlocks.forEach(function (num) {
      num.style.backgroundColor = document.getElementById('colorText').textContent
    })
    document.querySelector('header').style.backgroundColor = document.getElementById('colorText').textContent
  } else {
    colorBlocks[0].style.backgroundColor = 'RGB(0, 0, 0)'
    document.getElementById('results').textContent = "Try Again"
  }
})

colorBlocks[1].addEventListener('click', function () {
  if (rgbArray[1] == document.getElementById('colorText').textContent) {
    document.getElementById('results').textContent = "Correct"
    for (var i = 0; i < rgbArray.length; i++) {
      rgbArray[i] = document.getElementById('colorText').textContent
    }
    colorBlocks.forEach(function (num) {
      num.style.backgroundColor = document.getElementById('colorText').textContent
    })
    document.querySelector('header').style.backgroundColor = document.getElementById('colorText').textContent
  } else {
    colorBlocks[1].style.backgroundColor = 'RGB(0, 0, 0)'
    document.getElementById('results').textContent = "Try Again"
  }
})

colorBlocks[2].addEventListener('click', function () {
  if (rgbArray[2] == document.getElementById('colorText').textContent) {
    document.getElementById('results').textContent = "Correct"
    for (var i = 0; i < rgbArray.length; i++) {
      rgbArray[i] = document.getElementById('colorText').textContent
    }
    colorBlocks.forEach(function (num) {
      num.style.backgroundColor = document.getElementById('colorText').textContent
    })
    document.querySelector('header').style.backgroundColor = document.getElementById('colorText').textContent
  } else {
    colorBlocks[2].style.backgroundColor = 'RGB(0, 0, 0)'
    document.getElementById('results').textContent = "Try Again"
  }
})

colorBlocks[3].addEventListener('click', function () {
  if (rgbArray[3] == document.getElementById('colorText').textContent) {
    document.getElementById('results').textContent = "Correct"
    for (var i = 0; i < rgbArray.length; i++) {
      rgbArray[i] = document.getElementById('colorText').textContent
    }
    colorBlocks.forEach(function (num) {
      num.style.backgroundColor = document.getElementById('colorText').textContent
    })
    document.querySelector('header').style.backgroundColor = document.getElementById('colorText').textContent
  } else {
    colorBlocks[3].style.backgroundColor = 'RGB(0, 0, 0)'
    document.getElementById('results').textContent = "Try Again"
  }
})

colorBlocks[4].addEventListener('click', function () {
  if (rgbArray[4] == document.getElementById('colorText').textContent) {
    document.getElementById('results').textContent = "Correct"
    for (var i = 0; i < rgbArray.length; i++) {
      rgbArray[i] = document.getElementById('colorText').textContent
    }
    colorBlocks.forEach(function (num) {
      num.style.backgroundColor = document.getElementById('colorText').textContent
    })
    document.querySelector('header').style.backgroundColor = document.getElementById('colorText').textContent
  } else {
    colorBlocks[4].style.backgroundColor = 'RGB(0, 0, 0)'
    document.getElementById('results').textContent = "Try Again"
  }
})

colorBlocks[5].addEventListener('click', function () {
  if (rgbArray[5] == document.getElementById('colorText').textContent) {
    document.getElementById('results').textContent = "Correct"
    for (var i = 0; i < rgbArray.length; i++) {
      rgbArray[i] = document.getElementById('colorText').textContent
    }
    colorBlocks.forEach(function (num) {
      num.style.backgroundColor = document.getElementById('colorText').textContent
    })
    document.querySelector('header').style.backgroundColor = document.getElementById('colorText').textContent
  } else {
    colorBlocks[5].style.backgroundColor = 'RGB(0, 0, 0)'
    document.getElementById('results').textContent = "Try Again"
  }
})