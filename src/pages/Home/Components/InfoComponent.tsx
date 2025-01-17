import Button from '../../../components/button/Button';
import styles from '../Styles/Home.module.scss'


export interface InfoComponentProps { 
    title: string; 
    text:string; 
    image: string
    buttonLabel?:string
}

const InfoComponent = ({ title, text, image }: InfoComponentProps) => {
    console.log(text)
  return (
    <div className={styles.content__container}>
      <div className={styles.content__container__text__area}>
        <h2>{title}<span style={{color:'#6F00FF'}}>.</span></h2>
        <p>{text}</p>
        <Button text='See Products' type='button' link='/shoes'/>
      </div>
      <div className={styles.content__container__image__area}>
        <img style={{borderRadius: "1rem", width: "100%"}} src={image} />
        {/* <img style={{borderRadius: "1rem", width: "100%"}} src='./images/trailRunningShoe.png' /> */}
        {/* <img style={{borderRadius: "1rem", width: "100%"}} src='./images/trekkingShoe.png' /> */}
      </div>

    </div>
  )
}

export default InfoComponent
