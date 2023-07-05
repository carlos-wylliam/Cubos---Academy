const arquivos = ['minecraft.exe', 'travazap.zip', 'titanic.mkv', 'hacker.bat']

const antivirus = (arquivos) =>{
    const verificarArquivos = arquivos.some((item) =>{
        const existeExtensao = item.indexOf('.bat')
        return existeExtensao !== -1
        //-1 = não encontrado, 1 = encontrado
    })

    if(verificarArquivos){
        console.log('vírus detectado')
    }else{
        console.log('nenhum vírus encontrado.')
    }
}

antivirus(arquivos)
