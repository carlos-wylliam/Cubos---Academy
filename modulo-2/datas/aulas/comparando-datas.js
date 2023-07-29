//Datas são objetos, portante são comparados por referência
    //- Ou seja, new Date(0) !== new Date(0)
//Ou seja, caso queira comparar se é o mesmo momento, use timestamps.
    //- +(new Date(0)) === (new Date (0))
//Caso queira comparar anterioridade ou posterioridade, use timestamps e os operadores tradicionais >, <, >= e <=

//Exemplo de comparação

const finalDaCopa1= new Date(2002, 5, 30, 8)
const finalDaCopa2 = new Date(2002, 5, 30, 8)

console.log(+finalDaCopa1 === +finalDaCopa2)