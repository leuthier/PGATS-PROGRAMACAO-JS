function geradorDeTagsDeIdentificacao (nome) {
  return nome.toUpperCase()
}

function verificarSePodeSerAdotado (idade, porte) {
  return idade === 1 && porte === 'M'
}

function calcularConsumoDeRacao (nome, idade, peso) {
  const gramasPorKg = 300
  return peso * gramasPorKg
}

function decidirTipoDeAtividadePorPorte (porte) {
  let atividade

  switch (porte) {
    case 'pequeno':
      atividade = 'brincar dentro de casa'
      break
    case 'médio':
      atividade = 'caminhada no quarteirão'
      break
    case 'grande':
      atividade = 'correr no parque'
      break
    default:
      atividade = 'porte inválido'
  }
  return atividade
}

async function buscarDadoAsync () {
  return Promise.resolve('Pipoca')
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}
