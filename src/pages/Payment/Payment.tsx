import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import CodeCardInput from "./Components/CodeCardInput";
import Input from "./Components/Input";
import styles from "./styles/payment.module.scss";
import bankImages from "./Constant/contanst";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/states/Cart";

function Payment() {

  const dispatch = useDispatch();
  const shoeCart = useSelector((state: AppStore) => state.cart);
  const user = useSelector((state: AppStore) => state.user);
  const navigate = useNavigate();

  const total = shoeCart.reduce((sum, shoe) => sum + shoe.price, 0);

  const [debtMode, setDebtMode] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [creditMode, setCreditMode] = useState<boolean>(false);
  const [installments, setInstallments] = useState<number>(3);
  const [bank, setBank] = useState<string>("mastercard");

  function handleCardNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setCardNumber(e.target.value);
  }

  function handleInstallmentsChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setInstallments(parseInt(e.target.value));
    // total = total / installments
  }

  const handleDetChange = () =>
    creditMode === true ? setCreditMode(false) : setDebtMode(true);

  async function handlePurchase() {
    const PuchaseObj = {
      id: Math.random(),
      user: user,
      products: shoeCart,
      total: total,
      bank: bank,
      installments: installments,
    };

    await fetch("http://localhost:3000/payment", {
      method: "POST",
      body: JSON.stringify(PuchaseObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch(clearCart())
    navigate('/info')
  }

  function handleCreditChange() {
    if (debtMode === true) {
      setDebtMode(false);
    }
    setCreditMode(true);
  }

  function handleBankChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setBank(e.target.value);
  }

  return (
    <div className={styles.payment_form}>
      <div className={styles.payment_form_area}>
        <FontAwesomeIcon
          className={styles.payment_form_area_icon}
          icon={faMoneyBill}
        />
        <h2>Payment Form</h2>
        <p>Please enter the required data.</p>
        {/* <Input onChange={handleCardNumber} label="Card Number" placeholder="xxx xxx xxx" /> */}
        <input
          className={styles.inputField}
          type="text"
          onChange={handleCardNumber}
          placeholder="xxx xxx xxx"
        />
        <div
          style={{
            width: "20rem",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <b>
              Debito <Checkbox checked={debtMode} onClick={handleDetChange} />{" "}
            </b>
            <b>
              Credito{" "}
              <Checkbox checked={creditMode} onClick={handleCreditChange} />
            </b>
          </div>
          <div className={styles.select}>
            <select
              defaultValue={"mastercard"}
              onChange={handleBankChange}
              className={styles.select_input}
            >
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
              <option value="americanExpress">American Express</option>
              <option value="cabal">cabal</option>
            </select>
            <div
              style={{
                width: "4rem",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={bankImages[bank]} style={{ width: "100%" }} />
            </div>
          </div>
          <div className={styles.select}>
            <select
              defaultValue={"3"}
              onChange={handleInstallmentsChange}
              disabled={creditMode !== true ? true : false}
              className={styles.select_input}
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
            <b>
              {creditMode === true ? Math.floor(total / installments) : total}$
              c/u
            </b>
          </div>
        </div>
        <CodeCardInput />
        {/* <Button /> */}
        <button className={styles.btn_pay} onClick={handlePurchase}>Pay</button>
      </div>
      <div className={styles.payment_form_area}>
        {shoeCart.map((shoe) => {
          return (
            <div className={styles.bill_detail_area}>
              <div>
                <img style={{width:"50px"}} src={shoe.image[0]}/>
              </div>
              <div>
                <b>{shoe.name} {`(${shoe.items})`}</b>
              </div>
              <div style={{width:'100%', height:'auto', display:'flex', justifyContent:'space-between', alignItems:'start'}}>
              <p>Size {shoe.sizeSelected}</p>
             
              <p>{shoe.price}$ c/u</p>
              </div>
              
            </div>
          );
        })}
        <div
          style={{
            width: "100%",
            height: "auto",
            borderTop: "1px solid lightgray",
            borderBottom: "1px solid lightgray",
            borderRadius: "1rem",
            display: "flex",
            padding: "1rem 0.5rem",
            flexDirection: "column",
            boxShadow: "1px 2px 2px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Subtotal</p>
            <p>{total}$</p>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Tax {`10%`}</p>
            <p>{(total * 10) / 100}$</p>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>total</p>
            <p>{total + (total * 10) / 100}$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
