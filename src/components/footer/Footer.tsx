import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__item__area}></div>
      <div className={styles.footer__item}>
        <img src='/sportdepotlogoWhite.svg' style={{width:"100px"}}/>
      </div>

      <div className={styles.footer__item}>
        <b className={styles.footer__item__title}>Navigation</b>
        <ul className={styles.footer__nav}>
          <li className={styles.footer__nav__link}><Link to={'/shoes'}>Store</Link></li>
          <li className={styles.footer__nav__link}><Link to={'/search'}>Search</Link></li>
          <li className={styles.footer__nav__link}><Link to={'/cart'}>Cart</Link></li>
        </ul>
      </div>

      <div className={styles.footer__item}>
        <b className={styles.footer__item__title}>About us</b>
        <p>Run is an ecommerce platform offering top-brand shoes for every need, combining quality, style, and performance to ensure the best shopping experience. </p>
      </div>

      <div className={styles.footer__item}>
        <b className={styles.footer__item__title}>Contact</b>
        <span style={{fontSize: '0.9rem', color: '#fff', fontStyle: "italic"}}><FontAwesomeIcon icon={faEnvelope}/>{'  '}  run.ecommerce@gmail.com</span>
        <span style={{fontSize: '0.9rem', color: '#fff', fontStyle: "italic"}}><FontAwesomeIcon icon={faLocation}/>  Buenos Aires, Argentina</span>
      </div>

      <div className={styles.footer__contact}>
        <span>Run © All rights reserved. Quality guaranteed, always.</span>
        
      </div>
    </div>
  )
}

export default Footer
