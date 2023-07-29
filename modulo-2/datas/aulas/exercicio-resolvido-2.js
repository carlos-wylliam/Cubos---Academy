const finalDaCopa = new Date(2002, 5, 30, 8)
const inicioTimestamp = +finalDaCopa

const primeiroGolTimestamp = inicioTimestamp + (45+15+22)*60*1000
const primeiroGolDate = new Date(primeiroGolTimestamp)
console.log(primeiroGolDate)

const segundoGolTimestamp = inicioTimestamp + (45+15+38)*60*1000
const segundoGolDate = new Date(segundoGolTimestamp)
console.log(segundoGolDate)

const teste = new Date(2002,5,30,8,38)
const teste2 = +teste + 1000 * 60 * 60
const teste2Data = new Date(teste2)
console.log(teste2Data)