import QuestaoModel from '../model/questao'
import styles from '../styles/Questionario.module.css'
import Botao from './Botao'
import Questao from './Questao'

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice) {
        if(props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao ?
                <Questao 
                    valor={props.questao}
                    tempoParaResponder={15}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irProximoPasso}/>
                : false
            }
            
            <Botao onClick={props.irProximoPasso}
                texto={props.ultima ? 'Finalizar' : 'Próxima'}/>
        </div>
    )
}