const pessoa = {
    nome: "Wylliam",
    idade: 20,
    cidade: "Itabaiana",
    profissao: "Dev"
}

const endereco ={
    rua: "Rua tchurubangos",
    numero: "777",
    bairro: "Botafogo"
}

const objetoFundido ={
    ...pessoa,
    ...endereco
}

console.log(objetoFundido)