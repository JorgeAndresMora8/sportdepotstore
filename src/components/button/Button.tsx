import styles from './Button.module.scss'
import { Link } from 'react-router-dom';

export interface ButtonProps { 
    text: string; 
    type: 'submit' | 'button'; 
    link?: string
}

const Button = ({ text, type, link }: ButtonProps) => {
  
    // No hay link, button submit form
    if (!link){ 
        <button className={styles.button} type={type}>{text}</button>
    }

    // hay link => usar el tag link de react router dom
    return (
        <Link className={styles.button__link} to={link as string}>{text}</Link>
    )
 
}

export default Button
