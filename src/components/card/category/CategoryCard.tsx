import { Link } from 'react-router-dom'
import styles from './CategoryCard.module.scss'

interface CategoryCardProps { 
    title: string
    link: string
    img: string
}

const CategoryCard = ({ title, link, img } : CategoryCardProps) => {
  return (
    <div className={styles.card} >
      <Link className={styles.card__title} to={link}>{title.toUpperCase()}</Link>
      <img style={{width: "100%", height: "100%"}} src={img}/>
      
    </div>
  )
}

export default CategoryCard
