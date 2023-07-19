const input = "5 3.56 17 -5.1 36.3 0.0002 -2 5 5 -9.01 -17.7";
const dados = input.split(" ");
const quantidadePessoas = parseInt(dados[0]);
const posicoes = [];
let maiorDistancia = 0;

for (let i = 1; i <= quantidadePessoas * 2; i += 2) {
  posicoes.push([parseFloat(dados[i]), parseFloat(dados[i + 1])]);
}

for (let pessoa1 of posicoes) {
  for (let pessoa2 of posicoes) {
    let distancia = Math.sqrt((pessoa2[0] - pessoa1[0]) ** 2 + (pessoa2[1] - pessoa1[1]) ** 2
    );

    if (distancia > maiorDistancia) {
      maiorDistancia = distancia;
    }
  }
}

console.log(pessoa1)
//console.log(maiorDistancia)
