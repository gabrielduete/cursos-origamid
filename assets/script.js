let cursos = [
    {
        titulo: 'Flexbog',
        descricao: 'HTML e CSS FLEXBOX',
        img: '/assets/img/Screenshot_1.png',
        link: ''
    },
]

const divCursos = document.getElementById('cursos')

function geraCurso(){
    for (var i of cursos){
        criaElementos(i)
        console.log(i)
    }
}

function criaElementos(curso){
    const tituloProjeto = document.createElement('p')
    const descricao = document.createElement('p')
    const imagemProjeto = document.createElement('img')
    
    tituloProjeto.textContent = curso.titulo
    descricao.textContent = curso.descricao
    imagemProjeto.src = curso.img

    tituloProjeto.className = 'tituloProjeto'

    adicionaElementos(divCursos, tituloProjeto, descricao, imagemProjeto)
}

function adicionaElementos(div, p1, p2, img){
    let divCurso = document.createElement('div')
    divCurso.appendChild(p1)
    divCurso.appendChild(p2)
    divCurso.appendChild(img)
    div.appendChild(divCurso)

    divCurso.className = 'curso'
    div.className = 'cursos'
}

geraCurso()