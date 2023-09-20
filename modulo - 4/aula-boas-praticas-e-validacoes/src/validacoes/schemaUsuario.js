const joi = require('joi')

const schemaUsuario = joi.object({
    nome: joi.string().required().messages({
        'any.required':'O campo nome é obrigatório',
        'string.empty':'O campo nome é obrigatório'
    }),
    
    email: joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido',
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email é obrigatório'
    }),
    
    senha: joi.string().min(5).required().messages({
        'any.required':'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
        'string.min': 'A senha precisa conter, no minimo, 5 caracteres',
    }),

    idade: joi.number().positive().messages({
        'number.positive':'O campo idade precisa ser um número positivo'
    }),

    ativo: joi.boolean().messages({
        'boolean.base':'O campo ativo precisa ser um booleano'
    })
})

module.exports = schemaUsuario