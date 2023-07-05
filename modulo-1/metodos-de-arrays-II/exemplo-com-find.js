const usuarios = [
    {nome: "Carlos", idade: 19},
    {nome: "Ecio", idade: 20},
    {nome: "Gabriel", idade: 19}
]

const resultado = usuarios.find((usuario) =>{
    return usuario.nome === "Carlos"
})

console.log(resultado)