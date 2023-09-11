import axios from "axios";
import styles from "../module.css/CardsClientes.module.css";
import { useState, useEffect } from "react";

function CardsClientes() {
  const [dados, setdados] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("https://129.148.27.50/api/cliente");

      const data = response.data;
      setdados(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return dados.map((info) => (
    <div className={`${styles.container} ${info}`} key={info.id}>
      <p className={styles.id}>#{info.id}</p>
      <div className={styles.info}>
        <div className={styles.foto}>
          <img src="" alt="" />
        </div>
        <div>
          <p>Nome: {info.name}</p>
          <p className={ styles.p_email }> E-mail: {info.email}</p>
          <p>Status: {info.status}</p>
        </div>
      </div>
      <div className={styles.botao}>
        <button className={styles.btnVi}>Visualizar</button>
        <button className={styles.btnEdi}>Editar</button>
      </div>
    </div>
  ));
}

export default CardsClientes;
