import styles from './card.module.scss'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img style={{width: "100%"}} src='https://mateuarg.vtexassets.com/arquivos/ids/412484-800-auto?v=638386700783600000&width=800&height=auto&aspect=true'/>
      </div>
      <div className={styles.card__text}>
        <b className={styles.card__text__model}>DX-250</b>
        <p className={styles.card__text__category}>SportStyle</p>
        <p className={styles.card__text__price}>$250.000</p>
      </div>
    </div>
  )
}

export default Card
