import { faAdd, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppStore } from "../../redux/store";
import { Review } from "../../types/Review.types";
import Button from "../button/Button";
import ReviewModal from "../modal/ReviewForm/modal";
import ReviewList from "./Components/ReviewList";
import styles from "./styles/reviews.module.scss";
import io from "socket.io-client";
import GetDate from "../../utilities/GetDate";
import { Box, CircularProgress } from "@mui/material";
import useFetch from "../../hooks/useFetch";

const socket = io("http://localhost:3000");

export interface ReviewProps {
  productId: string;
  productName: string;
}

function Reviews({ productId, productName }: ReviewProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [review, setReviews] = useState<Review[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const user = useSelector((state: AppStore) => state.user);

  function handleFormModal() {
    if (user.id !== "0") setShowModal(true);
    else {
      localStorage.setItem("navigate-url", window.location.href);
      navigate("/login");
    }
  }

  interface SendMessageProps { 
    rating: string;
    message: string;
    title: string
  }

  const sendMessage = ({ rating, message, title } : SendMessageProps) => {
    const review = {
      userId: user.id,
      productId: productId,
      date: GetDate(),
      rating: rating,
      text: message,
      title: title
    };

    socket.emit("send_message", review);
  };

  useEffect(() => {
    socket.on("update_review", (reviewList) => {
      setReviews([...reviewList]);
    });
  }, [socket]);


  // Fetch reviews using the product id
  async function FetchReviews(){ 
    setLoading(true)
    const resp = await fetch(`http://localhost:3000/review/product/${productId}`)
    const data = await resp.json();
    setReviews(data)
    setLoading(false)
  }
    useEffect(() => { 
      FetchReviews()
    }, [])
      

  return (
    <>
      <ReviewModal
        sendMessage={sendMessage}
        productName={productName}
        show={showModal}
        setShow={setShowModal}
      />
      <div className={styles.container}>
        <div className={styles.container_general}>
          <b className={styles.section_title_review}>Opiniones De Clientes</b>
          <div className={styles.create_review}>
            <b>Escribe tu opinion de este producto</b>
            <p>Comparte tu opinion con otros clientes</p>
            <button className={styles.button_add_review} onClick={handleFormModal}>
              <FontAwesomeIcon icon={faAdd} /> review
            </button>
          </div>
          <div className={styles.promoted_product}>
          </div>
        </div>
        <div className={styles.container_reviewlist}>
          <b className={styles.section_title_review}>Opiniones destacadas</b>
            { loading ?  <Box sx={{ display: "flex" }}><CircularProgress /></Box> : <ReviewList reviews={review} />}
        </div>
      </div>
    </>
  );
}

export default Reviews;
