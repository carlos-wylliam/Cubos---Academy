const format = require('date-fns/format')

const date = new Date(2004,0,23)
// const dataFormatada = format(date, "dd/MMM/yyyy")
// const dataFormatada = format(date, "dd 'de' MMM 'de' yyyy")
const dataFormatada = format(date, "dd/MM/yyyy")
console.log(dataFormatada)