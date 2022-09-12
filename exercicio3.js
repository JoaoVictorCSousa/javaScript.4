const prompt = require("prompt-sync")()

const segundosString = prompt(`How many secs is rolling the show?`)
const segundos = Number (segundosString)

const horas = (segundos/3600)
const minutos = (segundos%3600/60)
const segs2 = (segundos%3600%60)

console.log(`The event is gonna roll in ${horas} hours, ${minutos} minutes and ${segs2} seconds`)
