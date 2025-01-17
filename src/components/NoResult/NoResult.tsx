import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './style.module.scss'

function NoResult() {
  return (
    <div className={styles.no__result__container}>
      <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
        <p className={styles.title}>We couldnt find products based on the words you entered</p>
        <span className={styles.message}>You can scroll down to see our products</span>
    </div>
  )
}

export default NoResult
