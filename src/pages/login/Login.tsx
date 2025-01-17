import { useState } from "react";
import Styles from "./style/Styles.module.scss";
import { Form } from "../../components/form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getMorty } from "../../service/Shoes/auth.service";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/states/User";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async (event: any) => {
    event.preventDefault();
    
    try{
      
      setLoading(true)
      const resp = await fetch('http://localhost:3000/auth/login', { 
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json', // Make sure it's set to 'application/json'
        },
        method:'POST',
        body: JSON.stringify({ email: username, password: password})
      }).then((resp) => resp.json())

      if(!resp.name) throw new Error('there was an error')
      dispatch(createUser(resp))


      let navigateToUrl = localStorage.getItem("navigate-url")
      if(navigateToUrl) {
        window.location.replace(navigateToUrl)
        localStorage.removeItem("navigate-url")
      }
      
      else navigate('/')
      
    }catch(error){ 
      setError(true)
    }finally{ 
      setLoading(false)
    }

  };

  return (
    <div className={Styles.container}>
      <div className={Styles.form__image__area}>
      </div>

      <div className={Styles.form__container}>
        <h2>Bienvenido de vuelta</h2>
        <p>
          Inicia sesión con tu cuenta para acceder a tu cuenta de cliente o
          administrador.
        </p>
        <Form onSubmit={handleLogin}>
          <div className={Styles.form__container__fields}>
            <Form.Label htmlFor="username">Email</Form.Label>
            <div className={Styles.form__container__fields__input__area}>
              <Form.Input
              placeholder={'enter your email'}
                id="username"
                value={username}
                onChange={(e: any) => setUsername(e.target.value)}
              />
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          <div className={Styles.form__container__fields}>
            <Form.Label htmlFor="username">Password</Form.Label>
            <div className={Styles.form__container__fields__input__area}>
              <Form.Input
              type="password"
              placeholder={'Enter your password'}
                id="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faLock}
              />
            </div>
          </div>
          { loading ? <button>Loading</button> : <Form.SubmitButton>Iniciar sesión</Form.SubmitButton>}
        </Form>
        <p>
          ¿No tienes una cuenta? <Link to={'/signup'}>Regístrate aquí</Link>
        </p>
        { error && <b className={Styles.error_message}>Usuario o contrasena incorrecta...</b> }
      </div>
    </div>
  );
}


export default Login