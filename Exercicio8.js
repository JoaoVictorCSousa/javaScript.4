const prompt = require('prompt-sync')()

//preço = soma do custo de fabrica + porcentagem do distribuidor e impostos//

const fabrica = prompt('Qual é o custo de fábrica do carro? ')
const precoFabrica = Number(fabrica)

const distribuidor = (precoFabrica/100)*28
const impostos = (precoFabrica/100)*45
const consumidor = precoFabrica + distribuidor + impostos

console.log(`The total cost to the consumer is R$ ${consumidor}`)