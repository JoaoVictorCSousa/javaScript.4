const prompt = require('prompt-sync')()

const x1 = prompt('Type the x1 number: ')
const x11 = Number(x1)

const x2 = prompt('Type the x2 number: ')
const x22 = Number(x2)

const y1 = prompt('Type the y1 number: ')
const y11 = Number(y1)

const y2 = prompt('Type the y2 number: ')
const y22 = Number(y2)

const potencia1 = Math.pow((x11-x22),2)
const potencia2 = Math.pow((y11-y22),2)

const raiz = Math.sqrt(potencia1+potencia2,2);

console.log(`The result is: ${raiz}`)
