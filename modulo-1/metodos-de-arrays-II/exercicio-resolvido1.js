const usuarios = [
    {
        nome: "Helder",
        idade: 19
    },
    {
        nome: "Iruam",
        idade: 18
    },
    {
        nome: "Livia",
        idade: 18
    }
]

const verificarIdade = (arrayPessoas) =>{
    const resultado = arrayPessoas.every((pessoa) =>{
        return pessoa.idade >= 18
    })

    if(resultado){
        console.log("Festa liberada!")
    }else{
        console.log("Possui menor de idade.")
    }
}

verificarIdade(usuarios)

