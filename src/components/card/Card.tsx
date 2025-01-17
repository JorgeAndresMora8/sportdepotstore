import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import { SHOES_LOGO } from "../../constant/Content/Content";

interface CardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string[];
  brand: string;
}

const Card = ({ id, name, category, price, image, brand }: CardProps) => {
  // console.log(brand)
  return (
    <Link to={`/shoes/${id}`}>
      <div className={styles.card}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            padding: "10px",
          }}
        >
          <img style={{ width: "80px" }} src={SHOES_LOGO[brand]} />
          
        </div>
        <div className={styles.card__image}>
          <img style={{ width: "100%" }} src={image[0]} />
        </div>
        <div className={styles.card__text}>
          <b className={styles.card__text__model}>{name}</b>
          <p className={styles.card__text__category}>{category}</p>
          <p className={styles.card__text__price}>${price}</p>
          <span>3 coutas sin recargo de {Math.floor(price / 3)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
