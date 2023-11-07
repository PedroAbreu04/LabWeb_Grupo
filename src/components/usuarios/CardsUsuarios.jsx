import { Link } from 'react-router-dom'
import styles from "../../module.css/usuarios/CardsUsuarios.module.css";
import base from "../../module.css/template/BaseDashboard.module.css"

function CardsUsuarios({ users }) {
  return users.map((user) => (

    <div className={`${styles.container} ${base.hover} ${!user.active ? styles.disabledCustomer : ""} `} key={user.id}>
      <div className={styles.cardBody}>
        <p className={styles.id}>#{user.id}</p>
        <div className={styles.user}>
          <div className={styles.foto}>
            <img src={user.imgPath} className={styles.img} />
          </div>
          <div>
            <p>Nome: {user.name}</p>
            <p className={styles.p_email}> E-mail: {user.email}</p>
            <p> Status: {user.active ? "Ativo" : "Desativado"} </p>
            <p> Permissão: {user.role} </p>
          </div>
        </div>
      </div>

      <div className={styles.botao}>
        <Link className={styles.btnVi} to={`/dashboard/usuario/${user.id}`}>Visualizar</Link>
      </div>
    </div>
  ));
}

export default CardsUsuarios;
