const pessoa = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
}

function apresentacao (pessoa){
    const faixaEtaria = determinarfaixaEtaria(pessoa.idade)
    
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
}

function determinarfaixaEtaria(idade){
    if(idade <= 21){
        return "jovem"
    }else if(idade >=22){
        return "adulto"
    }else{
        return "idoso"
    }
}



apresentacao(pessoa)