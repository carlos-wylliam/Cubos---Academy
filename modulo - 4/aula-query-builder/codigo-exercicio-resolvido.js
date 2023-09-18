//Faça uma query que retorne a quantidade de medicamentos da tabela farmacia
const quantidadeMedicamentos = await knex('farmacia').count().debug()
    
//Faça uma query que retorne o usuario com menor idade da tabela 
const idadeMaisNova = await knex('usuarios').min('idade').debug()

//Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela 'farmacia'
const categoriasNaoNulas = await knex('farmacia')
.select('categoria')
.sum('estoque')
.whereNotNull('categoria')
.groupBy('categoria')
.debug()

//Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela farmacia
const categoriaNull = await knex('farmacia').whereNull('categoria').count().debug()

//Faça uma query que retorna a categoria e a quantidade de produtos de cada categoria que não seja nula da tabela farmacia
const quantidadeCategorias = await knex('farmacia')
.select('categoria')
.count()
.whereNotNull('categoria')
.groupBy('categoria')
.debug()

//Faça uma query que retorna a idade e a quantidade de registros de cada idade, onde a idade seja maior ou igual a 18 anos, na tabela usuarios
const maiorOuIgual18 = await knex('usuarios').
select('idade')
.count()
.where('idade', '>=', 18)
.groupBy('idade')
.debug()