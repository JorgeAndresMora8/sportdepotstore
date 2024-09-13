import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__item__area}></div>
      <div className={styles.footer__item}>
        <b className={styles.footer__item__title}>About us</b>
      </div>

      <div className={styles.footer__item}>
        <b className={styles.footer__item__title}>Navigation</b>
        <ul className={styles.footer__nav}>
          <li className={styles.footer__nav__link}><Link to={'/'}>About SportDepot</Link></li>
          <li className={styles.footer__nav__link}><Link to={'/'}>Our Products</Link></li>
          <li className={styles.footer__nav__link}><Link to={'/'}>Homepage</Link></li>
          <li className={styles.footer__nav__link}><Link to={'/'}>Homepage</Link></li>
        </ul>
      </div>

      <div className={styles.footer__item}>
        <b className={styles.footer__item__title}>About us</b>
        <p>Salomon es la marca para deportes de montaña de la calzado, premium y auténticos en los Alpes franceses. </p>
      </div>

      <div className={styles.footer__item}>
        <b className={styles.footer__item__title}>Contact</b>
        <p>Salomon es la marca para deportes en los Alpes franceses. </p>
        <span style={{fontSize: '0.9rem', color: '#fff', fontStyle: "italic"}}><FontAwesomeIcon icon={faEnvelope}/>{'  '}  jorgeandresmm2002@gmail.com</span>
        <span style={{fontSize: '0.9rem', color: '#fff', fontStyle: "italic"}}><FontAwesomeIcon icon={faLocation}/>  Buenos Aires, Argentina</span>
      </div>

      <div className={styles.footer__contact}>
        <span>© 2024, Salomon Argentina. - jugando en los Alpes franceses desde 1947. </span>
        <div className={styles.footer__contact__options}>
          {/* <FontAwesomeIcon icon={agram} /> */}
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
