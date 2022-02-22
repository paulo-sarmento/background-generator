const css = document.querySelector('h3')
const inputColor1 = document.querySelector('.inputColor1')
const inputColor2 = document.querySelector('.inputColor2')
const body = document.querySelector('#gradient')
const btn = document.querySelector('.btn')

const cssBody = window.getComputedStyle(body); //get all body css
const backgroundBody = cssBody.background

const colorInput1 = /(?<=\(to right, )rgb\((?<R>\d{1,3}), (?<G>\d{1,3}), (?<B>\d{1,3})\)/g.exec(backgroundBody)

const colorInput2 = /(?<=to right, rgb\(\d{1,3}, \d{1,3}, \d{1,3}\), )rgb\((?<R>\d{1,3}), (?<G>\d{1,3}), (?<B>\d{1,3})\)/g.exec(backgroundBody)

const rgbToHex = rgb => { 
  let hex = Number(rgb).toString(16) //retorna uma string com a base específicada
  if (hex.length < 2) {
    hex = "0" + hex
  }
  return hex
}

const fullColorHex = (r,g,b) => {   
  let red = rgbToHex(r)
  let green = rgbToHex(g)
  let blue = rgbToHex(b)
  return '#'+red+green+blue
}

//randomiza número, Math.floor remove casa decimais e Math.random randomiza números entre 0 e 255
const randomize = () => {
  let number = Math.floor(Math.random() * 256)
  return number
}

const random = () => {
  let red = randomize()
  let green = randomize()
  let blue = randomize()
  red = rgbToHex(red)
  green = rgbToHex(green)
  blue = rgbToHex(blue)
  return '#'+red+green+blue
}

inputColor1.value = fullColorHex(colorInput1.groups['R'], colorInput1.groups['G'], colorInput1.groups['B'])
inputColor2.value = fullColorHex(colorInput2.groups['R'], colorInput2.groups['G'], colorInput2.groups['B'])
css.textContent = backgroundBody + ";"

function setGradient() {
    body.style.background = "linear-gradient(to right, " + inputColor1.value + ", " + inputColor2.value + ")"
    css.textContent = body.style.background + ";"
}

function setRandomGradient() {
  inputColor1.value = random()
  inputColor2.value = random()
  body.style.background = "linear-gradient(to right, " + inputColor1.value + ", " + inputColor2.value + ")"
  css.textContent = body.style.background + ";"
}

inputColor1.addEventListener('input', setGradient)
inputColor2.addEventListener('input', setGradient)
btn.addEventListener('click', setRandomGradient)