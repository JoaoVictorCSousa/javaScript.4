const prompt = require('prompt-sync')()

const notaA = prompt('Type your first grade: ')
const notaAA = Number(notaA*2)

const notaB = prompt('Type your second grade: ')
const notaBB = Number(notaB*3)

const notaC = prompt('Type your last grade: ')
const notaCC = Number(notaC*5)

const final = (notaAA+notaBB+notaCC)/10

console.log(`Your school avarage is ${final}`)

