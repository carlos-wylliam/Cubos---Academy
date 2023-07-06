const professores = [
    {
        nome: "Guido",
        stack: "backend"
    },
    {
        nome: "Vidal",
        stack: "backend"
    },
    {
        nome: "Dani",
        stack: "frontend"
    },
    {
        nome: "Diego",
        stack: "frontend"
    },
    {
        nome: "Léo",
        stack: "backend"
    },
    {
        nome: "Ruli",
        stack: "frontend"
    }
]

const filtrarStack = (arrayProfessores) =>{
    const professorFront = arrayProfessores.filter((professor)=>{
        return professor.stack === "frontend"
    })
    const professorBack = arrayProfessores.filter((professor)=>{
        return professor.stack === "backend"
    })
    console.log(professorFront)
    console.log(professorBack)
}

filtrarStack(professores)