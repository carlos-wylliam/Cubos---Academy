// select * from agenda
// const agenda = await knex('agenda').debug()
// const agenda = await knex.raw('select * from agenda')
// const agenda = await knex('agenda').where('id', 5).debug()
// const agenda = await knex('agenda').where('id','!=',5).debug()
// const agenda = await knex('agenda').where({id: 5, nome: 'alguma coisa'}).debug()
// const agenda = await knex('agenda').where({ id: 5}).select('id','nome').first().debug()
// const agenda = await knex('agenda').whereNull('email').debug()
// const agenda = await knex('agenda').whereNotNull('email').debug()
// const agenda = await knex('agenda').whereBetween('id',[5,10]).orderBy('id','desc').debug();
// const agenda = await knex('agenda').distinct('email').debug()
// const agenda = await knex('agenda').select('email').groupBy('email').count().debug()
// const agenda = await knex('agenda').limit(5).offset(2).debug()
// const agenda = await knex('agenda').whereNull('email').count().debug()
// const agenda = await knex('agenda').whereNull('email').sum('id').debug()
// const agenda = await knex('agenda').whereNull('email').avg('id').debug()
// const agenda = await knex('agenda').whereNull('email').min('id').debug()
// const agenda = await knex('agenda').whereNull('email').max('id').debug()

