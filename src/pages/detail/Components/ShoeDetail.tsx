import { faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AlertModal from "../../../components/modal/SelectSize/modal";
import { updateCart } from "../../../redux/states/Cart";
import { AppStore } from "../../../redux/store";
import AccordionExpandIcon from "../Components/Accordion";
import ProductRelated from "../Components/ProductRelated";
import { SIZE_AVALIABLE } from "../constant/sizeAvaliable";
import styles from "../detail.module.scss";
import DetailModal from "./Modal";
import Reviews from "../../../components/reviews/reviews";
import BrandRelated from "./BrandRelated";

export interface JSONResponse {
  data: Shoe[];
}

interface Shoe {
  brand: string;
  id: string;
  name: string;
  price: number;
  image: string[];
  category: string;
  description: string;
  stock: number;
  size: string;
  features: string[];
}

const ShoeDetail = (shoeDetail: Shoe) => {
  const [size, setSize] = useState<number>(0);
  const [items, setItems] = useState<number>(1);
  const [image, setImage] = useState<string>('')
  const [shoeModal, setShoeModal] = useState<boolean>(false)
  const [alertModal, setAlertModal] = useState<boolean>(false)

  const shoeCart = useSelector((state: AppStore) => state.cart)
  const shoeCartCopy = shoeCart.map((item) => ({ ...item }));

  const dispatch = useDispatch();

  const handleAddButton = () => {

    if(size === 0){
      setAlertModal(true)
      return;
    }
    const shoeObj = {
      id: shoeDetail.id,
      name: shoeDetail.name,
      price: shoeDetail.price,
      image: shoeDetail.image,
      category: shoeDetail.category,
      description: shoeDetail.description,
      stock: shoeDetail.stock,
      sizeSelected: size,
      features: shoeDetail.features,
      items: items
    };

    let isInCart = shoeCartCopy.findIndex((item) => item.id === shoeObj.id)
    if (isInCart === -1){ 
      dispatch(updateCart([...shoeCartCopy, shoeObj]))
    }else{ 
      if(String(shoeCartCopy[isInCart].sizeSelected) === String(size)){
      shoeCartCopy[isInCart].items += items;
      dispatch(updateCart(shoeCartCopy))
      }else{ 
        dispatch(updateCart([...shoeCartCopy, shoeObj]))
      }
    }

    setShoeModal(true)
    
  };

  function handleAddItem() {
    setItems(items + 1);
  }

  function handleRemoveItem() {
    if (items > 1) {
      setItems(items - 1);
    }
  }

  useEffect(() => { 
    setImage(shoeDetail.image[0])
    setSize(0)
  }, [shoeDetail.id])


    return (
      <>
      <AlertModal setShow={setAlertModal} show={alertModal}/>
      <DetailModal setShow={setShoeModal} show={shoeModal}/>
      <div className={styles.detail__container}>
      
        <div className={styles.detail__container__product}>
          <div className={styles.detail__container__product__image}>
            <img style={{ width: "100%", height: '100%' }} src={image} />
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                gap: "10px",
              }}
            >
              
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "5rem",
                  height: "5rem",
                  border: "1px solid lightgray",
                  padding: "5px",
                  borderRadius: "0.5rem",
                }}
              >
                <img onClick={() => setImage(shoeDetail.image[0])} src={shoeDetail.image[0]} style={{ width: "100%" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "5rem",
                  height: "5rem",
                  border: "1px solid lightgray",
                  padding: "5px",
                  borderRadius: "0.5rem",
                }}
              >
                <img onClick={() => setImage(shoeDetail.image[1])} src={shoeDetail.image[1]} style={{ width: "100%" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "5rem",
                  height: "5rem",
                  border: "1px solid lightgray",
                  padding: "5px",
                  borderRadius: "0.5rem",
                }}
              >
                <img onClick={() => setImage(shoeDetail.image[2])} src={shoeDetail.image[2]} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div className={styles.detail__container__product__description}>
            <span style={{backgroundColor:"#A6AEBF", color:"#1e1e1e", padding:"5px 10px", borderRadius:"0.5rem"}} >
              <FontAwesomeIcon icon={faTruck} />{` `}free delivery</span>
            <b className={styles.detail__container__product__description__name}>
            {shoeDetail.brand.charAt(0).toUpperCase() + shoeDetail.brand.slice(1).toLowerCase()} {shoeDetail.name} 
            </b>
            <p
              className={styles.detail__container__product__description__price}
            >
              ${shoeDetail.price}
            </p>

            <div className={styles.installment__container}>
              <div className={styles.installment__container__header}>
                Aprovecha nuestras promos bancarias <FontAwesomeIcon style={{color:"#0D6EFD"}} icon={faCreditCard}/>
              </div>
              <div className={styles.installment__container__header}>
                <div className={styles.installment__container__bank}>
                  <img
                    src="https://soudian.me/wp-content/uploads/2022/12/Visa-payment-1.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className={styles.installment__container__bank}>
                  <img
                    src="https://th.bing.com/th/id/OIP.8hSdZiAvNki23CzVyAvSLQHaEK?rs=1&pid=ImgDetMain"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className={styles.installment__container__bank}>
                  <img
                    src="https://logodix.com/logo/61136.png"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className={styles.installment__container__bank}>
                  <img
                    src="https://th.bing.com/th/id/OIP.1WQP5vYXJxYzFZVGcznTyAHaDn?rs=1&pid=ImgDetMain"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className={styles.installment__container__header}>
                <span>Until <b>6 Installemtns</b> with no interest</span>
              </div>
            </div>

            <div className={styles.product__size__container}>
              {SIZE_AVALIABLE.map(({ NUMBER, IS_AVALIABLE }) => (
                <button
                  key={NUMBER}
                  // onClick={() => {setSize(NUMBER)}}
                  onClick={() => {
                    if(size === NUMBER){ 
                      setSize(0)
                    }else{ 
                      setSize(NUMBER)
                    }
                  }}
                  // disabled={!!IS_AVALIABLE}

                  className={`
                  ${
                    IS_AVALIABLE
                      ? styles.product__size__container__option
                      : styles.product__size__container__option__no__avaliable
                  }
                    ${size === NUMBER && styles.selected}

                    `}
                >
                  {NUMBER}
                </button>
              ))}
            </div>
            <a href="https://cdn.shopify.com/s/files/1/0275/1234/0540/files/guia-de-tallas-calzado-redberry.png?v=1572389318">
              guia del tamano
            </a>
            <p
              className={
                styles.detail__container__product__description___quantity
              }
            >

              <div className={styles.item__controller}>
                Quiero
                <button
                  onClick={handleAddItem}
                  className={styles.item__controller__btn}
                >
                  +
                </button>
                <b>{items}</b>
                <button
                  onClick={handleRemoveItem}
                  className={styles.item__controller__btn}
                >
                  -
                </button>
                <button style={{ backgroundColor:"#4A628A" }} onClick={handleAddButton} className={styles.btn__add}>
                Agregar Al Carrito
              </button>
              </div>
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "left",
                gap: "10px",
                alignItems: "center",
              }}
            >
              
              {/* <button style={{ backgroundColor:"#373A40" }} onClick={handleAddButton} className={styles.btn__add}>
                Comprar Ahora
              </button> */}
            </div>
          </div>
        </div>
        <div className={styles.related__info}>
          <AccordionExpandIcon
            description={shoeDetail.description}
            features={shoeDetail.features}
          />
        </div>
        <b className={styles.recommend__product__title}>
          Tambien Te Puede Gustar
        </b>
        {shoeDetail && <ProductRelated productId={shoeDetail.id} category={shoeDetail.category} />}

        <Reviews productName={`${shoeDetail.brand} ${shoeDetail.name}`} productId={shoeDetail.id}/>

        <b className={styles.recommend__product__title}>Calzado {shoeDetail.brand}</b>
        {shoeDetail && (
          <BrandRelated brand={shoeDetail.brand}  productId={shoeDetail.id} category={shoeDetail.category} />
        )}
        
      </div>
      
      </>
    );
  }

export default ShoeDetail;
