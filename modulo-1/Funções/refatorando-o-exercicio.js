const pessoa1 = {
    nome: "Carlos",
    idade: 19,
    profissao: "Estudante"
}

const pessoa2 = {
    nome: "Lucas",
    idade: 26,
    profissao: "Cantor"
}

const pessoa3 = {
    nome: "James",
    idade: 33,
    profissao: "Vendedor de salada de fruta"
}

//------------------------------------------

function faixaEtaria(idade){
    if(idade <= 21){
        return "jovem"
    }else if( idade <= 66){
        return "adulto"
    }else{
        return "idoso"
    }
}


function apresentacao(pessoa, idade){
    console.log(`Meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria(pessoa.idade)}, de ${pessoa.idade} anos e sou ${pessoa.profissao}`)
}

apresentacao(pessoa1, faixaEtaria(pessoa1.idade))
apresentacao(pessoa2, faixaEtaria(pessoa1.idade))
apresentacao(pessoa3, faixaEtaria(pessoa1.idade))


