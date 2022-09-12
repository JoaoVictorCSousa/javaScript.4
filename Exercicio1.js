const prompt = require('prompt-sync')()


const anosString = prompt('How many years have you been living? ')
const anos = Number(anosString)

const mesesString = prompt (`How many months have you been living? `)
const meses = Number(mesesString)

const diasString = prompt (`How many days have you been living?`)
const dias = Number(diasString)

const totalDias = (anos * 365) + (meses*30) + dias

console.log(`You have been living ${totalDias} days`)