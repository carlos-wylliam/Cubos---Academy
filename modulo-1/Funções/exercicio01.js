const pessoaObj = {
    nome: "Wylliam",
    idade: 19,
    profissao: "estudante",
    altura: 1.77
}

let faixaEtaria = ''
if(pessoaObj.idade >= 12 && pessoaObj.idade <= 17){
    faixaEtaria = 'Jovem'
}else if( pessoaObj.idade >= 18 && pessoaObj.idade <= 59){
    faixaEtaria = 'Adulto'
}else{
    faixaEtaria = 'Idoso'
}

function apresentacao(pessoa){
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
}

apresentacao(pessoaObj)
