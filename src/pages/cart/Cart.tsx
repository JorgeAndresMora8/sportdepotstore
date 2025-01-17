import { faMoneyBill, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../models/routes'
import { AppStore } from '../../redux/store'
import StickyHeadTable from './Components/CartList'
import Styles from './styles/Cart.module.scss'


const Cart = () => {

  const car = useSelector((state: AppStore) => state.cart)
  
  const totalPrice = car.reduce((accumulator, product) => {
    return accumulator + (product.price * product.items);
  }, 0);

  
  

  return (
    <div className={Styles.cart__container}>
        <div className={Styles.cart__container__header}>
            <b>Your Cart</b>
            <div className={Styles.cart__buttons__area}>
                <Link className={Styles.button_option} to={`/${PrivateRoutes.STORE}`}>Go Shopping</Link>
                { totalPrice !== 0 && <Link className={Styles.button_option} to={`/${PrivateRoutes.PAYMENT}`}> <FontAwesomeIcon icon={faMoneyBill} /> Buy Now</Link>}
            </div>
        </div>
        <div className={Styles.cart__container__list}>
          { totalPrice === 0 ? 
          <div style={{display:"flex", justifyContent:"center", alignItems:'center', flexDirection:"column"}}>
          <FontAwesomeIcon className={Styles.shoppingBagIcon} icon={faShoppingBag} />
          <b className={Styles.empty_car_message}>Your cart is empty</b>
          </div>
          :  <StickyHeadTable/>}
          <div className={Styles.purchase__info}>
          { totalPrice !== 0 && 
          <>
          <span>Total</span> <b>{totalPrice}$</b>
          </>}
        </div>
        </div>
        
    </div>
  )
}

export default Cart
