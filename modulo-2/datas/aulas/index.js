const finalDaCopa = new Date(2002,5,30,8)
const finalMaisUmaHora = +finalDaCopa +1000*60*60
const maisUmaHoraDate = new Date (finalMaisUmaHora)
console.log(maisUmaHoraDate)

//Como criar uma nova data
// 1. new Date() - agora
// 2. new Date(numero) - cria a partir de timestamp (milisegundos desde 1970)
// 3. new Date("1995-12-17T03:24:00") - cria data a partir de TextDecoder, no UTC (fica 17/12/95 ás 00:24 no nosso fuso)
//     a. Dá pra criar assim com new Date("1995-12-17T03:24:00-0300")
//     b. Evitar ao máximo - tem inconsistência entre navegadores
// 4.new Date(1995,11,17,3,24,0) - cria data a partir de ano, mês (começa em zero), dia, hora, minuto, segundo. 
// Tudo a partir do dia é opcional (se não for passado, o dia fica 1; o resto fica zero)