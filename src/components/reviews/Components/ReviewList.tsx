import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Review } from "../../../types/Review.types";
import styles from "../styles/reviews.module.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export interface ReviewListProps {
  reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps) {

  if(reviews.length <= 0){ 
    return <p>No reviews yet</p>
  }

  return (
    <>
      {reviews.map((review) => (
        <div className={styles.review_item}>
          <div className={styles.review_item_header}>
            <span>{review.user.name}{' '}{review.user.lastname}</span>
          </div>
          <div className={styles.review_item_header_rating}>
            <img
              src={`/images/${review.rating}StarRating.png`}
              style={{ width: "5.5rem" }}
            />
            <b>{review.title}</b>
          </div>
          <span className={styles.review_item_date}>
            {review.date}
          </span>
          <p className={styles.review_item_body}>{review.text}</p>
        </div>
      ))}
    </>
  );
}

export default ReviewList;
