import { useSelector, useDispatch } from "react-redux";
import styles from "./styles/style.module.scss";
import { AppStore } from "../../redux/store";
import { resetUser } from "../../redux/states/User";
import { useNavigate } from "react-router-dom";

function User() {

  const user = useSelector((state: AppStore) => state.user)
  const dispatch = useDispatch()
  
  const navigate = useNavigate()

  function handleLogout(){ 
    dispatch(resetUser())
    navigate('/login')
  }

  return (
    <div className={styles.user_info_container}>
      <div className={styles.user_info_container_item}>
        <div className={styles.user_info_container_item_header}>
          <span>Mi Perfil</span>
          <button className={styles.logout_btn} onClick={handleLogout}>Logout</button>
        </div>

        <div className={styles.user_info_container_item_field}>
          <span>Nombre</span>
          <b>{user.name}</b>
        </div>

        <div className={styles.user_info_container_item_field}>
          <span>Apellido</span>
          <b>{user.lastname}</b>
        </div>

        <div className={styles.user_info_container_item_field}>
          <span>DNI</span>
          <b>{user.dni}</b>
        </div>

        <div className={styles.user_info_container_item_field}>
          <span>Telefono</span>
          <b>+54 {user.phone}</b>
        </div>

        <div className={styles.user_info_container_item_field}>
          <span>Gmail</span>
          <b>{user.email}</b>
        </div>
      </div>

      <div className={styles.user_info_container_item}>
        <div className={styles.user_info_container_item_header}>
          <span>Pedidos</span>
        </div>

        <b>No hay historial de pedidos</b>

      </div>
    </div>
  );
}

export default User;
