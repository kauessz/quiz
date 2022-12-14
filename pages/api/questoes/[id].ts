import questoes from '../bancoDeQuestoes'

export default function handler(req, res) {
  const idSelecionado = +req.query.id

  const unicaQuestao = questoes.filter(questao => questao.id === idSelecionado)

  if(unicaQuestao.length === 1){
    const questaoSelecionada = unicaQuestao[0].embaralharRespostas()
    res.status(200).json(questaoSelecionada.toObject())
  }else {
    res.status(204).send()
  }
}