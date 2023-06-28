const pessoa = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4,
    apresentar: function (){
        const faixaEtaria = this.determinarfaixaEtaria(this.idade)
        
        console.log(`Olá! Meu nome é ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}.`)
    },
    determinarfaixaEtaria: function (){
        if(this.idade <= 21){
            return "jovem"
        }else if(this.idade >= 22){
            return "adulto"
        }else{
            return "idoso"
        }
    }

}

pessoa.apresentar()
console.log(pessoa.determinarfaixaEtaria())