//idade minima para poder entrar no evento é 18
//tenho uma lista com idades
//quero saber quem dessas pessoas que estao na lista é a mais nova e que se encaixa na regra minima de idade
//exemplo, minha lista tem 12, 18, 27
//quem vai participar é quem tem 18 porque é a mais nova que se encaixa nas regras


//ler a lista - OK
//verificar se a idade se encaixa na regra - OK
//igual ou maior a 18 anos - OK
//preciso saber quem que passou nessas regras é a pessoa mais nova
//comparar se idade1 < idade2

const lista = [12,18,27]
const pessoasSeparadas = []
for(let item of lista){
    if(item >= 18){
        let pessoas = item
        pessoasSeparadas.push(pessoas)
        
    }
}
if(pessoasSeparadas.length === 0){
    console.log("CRESCA E APARECA")
}else{
    let min = Math.min(...pessoasSeparadas)
    console.log(min)
}


