const INCREMENTAR_TEMPO = 'INCREMENTAR_TEMPO'
const REDUZIR_TEMPO = 'REDUZIR_TEMPO'
const MODIFICAR_EMAIL = 'MODIFICAR_EMAIL'

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO })
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO })
export const modificarEmail = (newEmail) => ({
  type: MODIFICAR_EMAIL,
  newEmail,
})

const aluno = {
  nome: 'Gabriel Duete',
  email: 'gabrielmonteiroduete@gmail.com',
  diasRestantes: 120,
}

const reducer = (state = aluno, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes++
      break
    case REDUZIR_TEMPO:
      state.diasRestantes--
      break
    case MODIFICAR_EMAIL:
      state.email = action.newEmail
      break
    default:
      return state
  }
}

export default reducer
