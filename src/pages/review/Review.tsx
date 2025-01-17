import { useState } from "react";
import Styles from "./Style/review.module.scss";
import { Form } from "../../components/form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Review() {
  const [name, setName] = useState<string>('')
  const [lastname, setlastname] = useState<string>('')
  const [email, setemail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [phone, setphone] = useState<string>('')
  const [dni, setdni] = useState<string>('')

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    fetch('http://localhost:3000/auth/signup', { 
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json', // Make sure it's set to 'application/json'
      },
      method:'POST',
      body: JSON.stringify({ name, lastname, email, password, phone, dni})
    }).then((resp) => resp.json())
    .then((resp) => console.log(resp))
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.form__image__area}></div>

      <div className={Styles.form__container}>
        <h2>Bienvenido</h2>
        <p>Registra tus datos</p>
        <Form onSubmit={handleSubmit}>
          <div className={Styles.form__container__fields}>
            <Form.Label htmlFor="name">Name</Form.Label>
            <div className={Styles.form__container__fields__input__area}>
              <Form.Input
                placeholder={'Enter your name'}
                id="name"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

          <div className={Styles.form__container__fields}>
            <Form.Label htmlFor="lastname">Lastname</Form.Label>
            <div className={Styles.form__container__fields__input__area}>
              <Form.Input
              placeholder={'Enter your lastname'}
                id="lastname"
                value={lastname}
                onChange={(e: any) => setlastname(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

          <div className={Styles.form__container__fields}>
            <Form.Label htmlFor="email">Email</Form.Label>
            <div className={Styles.form__container__fields__input__area}>
              <Form.Input
                placeholder={'enter your password'}
                id="email"
                value={email}
                onChange={(e: any) => setemail(e.target.value)}
              />
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          <div className={Styles.form__container__fields}>
            <Form.Label htmlFor="phone">Phone Number</Form.Label>
            <div className={Styles.form__container__fields__input__area}>
              <Form.Input
              placeholder={'phone number...'}
                id="phone"
                value={phone}
                onChange={(e: any) => setphone(e.target.value)}
              />
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>
          <div className={Styles.form__container__fields}>
            <Form.Label htmlFor="Password">Password</Form.Label>
            <div className={Styles.form__container__fields__input__area}>
              <Form.Input
              placeholder={'password'}
                id="password"
                value={password}
                onChange={(e: any) => setpassword(e.target.value)}
              />
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>
          <div className={Styles.form__container__fields}>
            <Form.Label htmlFor="dni">DNI</Form.Label>
            <div className={Styles.form__container__fields__input__area}>
              <Form.Input
                placeholder={'Enter dni'}
                id="dni"
                value={dni}
                onChange={(e: any) => setdni(e.target.value)}
              />
              <FontAwesomeIcon icon={faLock} />
            </div>
          </div>
          <Form.SubmitButton>Crear Perfil</Form.SubmitButton>
        </Form>
        <p>
          ¿Ya tienes una cuenta? <Link to={"/login"}>Accede aqui</Link>
        </p>
      </div>
    </div>
  );
}

export default Review;
