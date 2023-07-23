const validarSenha = (req,res,next) =>{
    const { senha } = req.query
    const senhaCorreta = 'carros123'
    if(!senha){
        return res.send('A senha não foi informada')
    }else if(senha !== senhaCorreta){
        return res.send('A senha foi informada incorretamente')
    }
    next()
}

module.exports = validarSenha