const prompt= require("prompt-sync")()

const diasString = prompt (`How many days have you been living `)
const dias = Number (diasString)

const anos = (dias/365)
const meses = (dias/30)
const dias2 = (dias%30)

console.log(`You have been living ${anos} years, ${meses} months and ${dias2} days!`)




