import { faArrowLeft, faCircleInfo, faClock, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Styles from './styles/info.module.scss';

function Info(){ 
    return ( 
        <div 
        style={{width:"100%",
            padding:'5rem 0px',
            flexDirection:"column",
        backgroundColor:"#fff", 
        gap:'20px',
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center"}}>
            <img style={{width:"7rem"}} src="https://cdn4.iconfinder.com/data/icons/generic-interaction/143/yes-tick-success-done-complete-check-allow-512.png" alt="" />
        <div style={{width:'35rem', display:"flex", justifyContent:"center", alignItems:'center', flexDirection:"column"}}>
            <b className={Styles.title}>Compra Exitosa</b>
            <p>¡Tu compra ha sido exitosa! Pronto recibirás tu pedido en la dirección indicada. Gracias por confiar en nosotros, esperamos que disfrutes de tu compra. ¡Que tengas un excelente día!</p>
             
             <b style={{fontWeight:'400', color:'gray', marginBottom:'1rem'}}>
                <FontAwesomeIcon icon={faCircleInfo} /> {` `} We just send you an email confirmation with an invoce</b>

            <div style={{width:"100%", height:'auto', display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <span style={{color:"#fff",padding:"1rem 2rem", backgroundColor:"#7E8EF1", borderRadius:"1rem"}}><FontAwesomeIcon icon={faShoppingBag}/> Id: 1234567890</span>
            <span style={{color:"#fff",padding:"1rem 2rem", backgroundColor:"#7E8EF1", borderRadius:"1rem"}}><FontAwesomeIcon icon={faClock}/> Tiempo: 2 - 4 dias habiles</span>
            </div>
        </div>

        <Link style={{borderRadius:"0.5rem",padding:"0.5rem 1rem", backgroundColor:"#4C585B", color:"#fff"}} to={'/'}> <FontAwesomeIcon icon={faArrowLeft}/> Volver</Link>
        </div>
    )
}

export default Info;