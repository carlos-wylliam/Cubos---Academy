const usuarios = [
    {
        id: 11,
        nome: 'joao',
        idade: 23
    },
    {
        id: 2,
        nome: 'maria',
        idade: 23
    },
    {
        id:4,
        nome: 'ana',
        idade: 18
    },
    {
        id: 1,
        nome: 'rodrigo',
        idade: 30
    },
    {
        id: 123,
        nome: 'rodrigo',
        idade: 17
    }
]

const ordemCrescente = usuarios.sort((user1,user2)=>{
    return user1.id - user2.id 
})

const ordemDecrescente = usuarios.sort((user1, user2)=>{
    return user2.id - user1.id
})
console.log("Ordem crescente:")
console.log(ordemCrescente)

console.log("Ordem decrescente")
console.log(ordemDecrescente)

