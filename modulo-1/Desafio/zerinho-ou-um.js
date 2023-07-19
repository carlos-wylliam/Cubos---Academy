const jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 1
    },
    {
      "nome": "Beach",
      "jogada": 1
    },
    {
      "nome": "Laurel",
      "jogada": 1
    },
    {
      "nome": "Beatrice",
      "jogada": 1
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 1
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ]

  let qtdJogadasZero = 0
  
  const jogadasZero = jogadores.filter((elemento)=>{
    return elemento.jogada === 0
    
    
  }).map((elemento) =>{
    return elemento.nome
  })
  
  let qtdJogadasUm = 0
  
  const jogadasUm = jogadores.filter((elemento)=>{
    return elemento.jogada === 1
  }).map((elemento) =>{
    return elemento.nome
  })

  
  for(let item of jogadasZero){
    qtdJogadasZero += 1
  }
  for(let item of jogadasUm){
    qtdJogadasUm += 1
  }
  if(qtdJogadasZero === 1 && qtdJogadasUm > 1){
    console.log(jogadasZero[0])
  }else if(qtdJogadasUm === 1 && qtdJogadasZero > 1){
    console.log(jogadasUm[0])
  }else{
    console.log("NINGUEM")
  }