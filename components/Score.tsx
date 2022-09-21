import styles from '../styles/Score.module.css'

interface ScoreProps {
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}

export default function Score(props: ScoreProps) {
    return (
        <div className={styles.score}>
            <div className={styles.valor} style={{
               backgroundColor: props.corFundo ?? '#fdd60f',
               color: props.corFonte ?? '#333' 
            }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}