import styles from '../styles/Resultado.module.css'
import { useRouter } from "next/router"
import Score from '../components/Score'
import Botao from '../components/Botao'

export default function Resultado() {
    const router = useRouter()
    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{ display: 'flex' }}>
                <Score texto='Perguntas' valor={total}/>
                <Score texto='Certas' valor={certas} corFundo='#9cd2a4'/>
                <Score texto='Percentual' valor={`${percentual}%`} 
                    corFundo='#de6a33'/>
            </div>
            <Botao href='/' texto='Tentar Novamente' />
        </div>
    )
}