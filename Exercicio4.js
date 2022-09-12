const prompt = require("prompt-sync")()

const primeiroString = prompt (`Type a number: `)
const numeroA = Number(primeiroString)

const segundoString = prompt (`Type another number: `)
const numeroB = Number(segundoString)

const terceiroString = prompt(`Type the last number: `)
const numeroC = Number(terceiroString)

const r = (numeroA + numeroB)**2
const s = (numeroB+numeroC)**2

const d = (r+s)/2

console.log(`The expression result is ${d}`)


