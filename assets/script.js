let cursos = [
    {
        titulo: 'Flexbox',
        img: 'assets/img/flexbox-img.png',
        link: 'cursos/flexbox/projeto/index.html'
    },
    {
        titulo: 'CSS Grid Layout',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'Javascript Completo ES6',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'HTML e CSS para Iniciantes (BETA)',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'UI Design Avançado',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'React Completo',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'CSS GRID',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'WordPress REST API Dogs',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'Redux com React',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'CSS Avançado Posicionamento',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'Tipografia Avançada',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'CSS com SASS',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'UX Design Heurísticas',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'Adobe XD',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'Vue.js 2 Completo',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'WordPress REST API',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'WooCommerce Como CMS',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'Bootstrap 4',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'Automação Front End com NPM',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'JavaScript e jQuery',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
    },
    {
        titulo: 'Web Design Completo',
        img: 'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif',
        link: '#'
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
    const link = document.createElement('a')
    const imagemProjeto = document.createElement('img')
    
    tituloProjeto.textContent = curso.titulo
    imagemProjeto.src = curso.img
    imagemProjeto.href = curso.link
    link.appendChild(imagemProjeto)
    link.href = curso.link
    link.target = '_blank'

    tituloProjeto.className = 'tituloProjeto'

    adicionaElementos(divCursos, tituloProjeto, link)
}

function adicionaElementos(div, p1, a){
    let divCurso = document.createElement('div')
    divCurso.appendChild(p1)
    divCurso.appendChild(a)
    div.appendChild(divCurso)

    divCurso.className = 'curso'
    div.className = 'cursos'
}

geraCurso()