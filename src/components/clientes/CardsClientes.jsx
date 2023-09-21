import { Link } from 'react-router-dom'
import styles from "../../module.css/clientes/CardsClientes.module.css";

function CardsClientes({ customers }) {
  return customers.map((customer) => (

    <div className={`${styles.container} ${customer} ${!customer.status ? styles.disabledCustomer : ""} `} key={customer.id}>
      <div className={styles.cardBody}>
        <p className={styles.id}>#{customer.id}</p>
        <div className={styles.customer}>
          <div className={styles.foto}>
            <img src={customer.imgpath} className={styles.img} />
          </div>
          <div>
            <p>Nome: {customer.name}</p>
            <p className={styles.p_email}> E-mail: {customer.email}</p>
            <p> Status: {customer.status ? "Ativo" : "Desativado"} </p>
          </div>
        </div>
      </div>

      <div className={styles.botao}>
        <Link className={styles.btnVi} to={`/dashboard/cliente/${customer.id}`}>Visualizar</Link>
      </div>
    </div>
  ));
}

export default CardsClientes;
