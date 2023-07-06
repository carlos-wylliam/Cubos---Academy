const usuarios = [
    {
        nome: "Carlos",
        sobrenome: "Wylliam",
        idade: 19
    },
    {
        nome: "José",
        sobrenome: "Ecio",
        idade: 20
    }
]

const novoArray = usuarios.map((usuario)=>{
    return {
        nomeSobrenome:`${usuario.nome} ${usuario.sobrenome}`,
        idade:`${usuario.idade}`
    }
})

console.log(novoArray)