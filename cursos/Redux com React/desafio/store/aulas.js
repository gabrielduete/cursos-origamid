const COMPLETAR_AULA = 'COMPLETAR_AULA'
const COMPLETAR_CURSO = 'COMPLETAR_CURSO'
const RESETAR_CURSO = 'RESETAR_CURSO'

export const completarAula = (id) => ({ type: COMPLETAR_AULA, id })
export const completarCurso = () => ({ type: COMPLETAR_CURSO })
export const resetarCurso = () => ({ type: RESETAR_CURSO })

const aulas = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'Programação',
    completa: false,
  },
  {
    id: 3,
    nome: 'Marketing',
    completa: true,
  },
  {
    id: 4,
    nome: 'Gestão de Projetos',
    completa: false,
  },
  {
    id: 5,
    nome: 'Liderança',
    completa: true,
  },
  {
    id: 6,
    nome: 'Inovação',
    completa: false,
  },
]

const ajusteAulaCompleta = (state, complted = true) => {
  state.map((curso) => {
    curso.completa = complted
  })
}

const reducer = (state = aulas, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      state.find((aula) => aula.id === action.aula).completa = true
      break
    case COMPLETAR_CURSO:
      ajusteAulaCompleta(state)
      break
    case RESETAR_CURSO:
      ajusteAulaCompleta(state, false)
      break
    default:
      return state
  }
}

export default reducer
