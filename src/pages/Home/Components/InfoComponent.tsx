import Button from '../../../components/button/Button';
import styles from '../Styles/Home.module.scss'


export interface InfoComponentProps { 
    title: string; 
    text:string; 
    image: string
    buttonLabel?:string
}

const InfoComponent = ({ title, text }: InfoComponentProps) => {
    console.log(text)
  return (
    <div className={styles.content__container}>
      <div className={styles.content__container__text__area}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button text='buy now' type='button' link='/admin'/>
      </div>
      <div className={styles.content__container__image__area}>
        <img style={{borderRadius: "1rem", width: "100%"}} src='./images/trailRunning2.jpg' />
      </div>

    </div>
  )
}

export default InfoComponent
