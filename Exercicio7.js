const prompt = require('prompt-sync')()

const a = prompt('Type the first number: ')
const aa = Number(a)

const b = prompt('Type the second number: ')
const bb = Number(b)

const c = prompt('Type the third number: ')
const cc = Number(c)

const d = prompt('Type the fourth number: ')
const dd = Number(d)

const e = prompt('Type the fifth number: ')
const ee = Number(e)

const f = prompt('Type the sixth number: ')
const ff = Number(f)

const x = (c*e)-(b*f)/(a*e)-(b*d)
const y = (a*f)-(c*d)/(a*e)-(b*d)

console.log(`Os valores de X e Y são respectivamente ${x} e ${y}`)