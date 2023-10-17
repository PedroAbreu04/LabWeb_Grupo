import { useParams } from "react-router-dom";
import styles from "../../module.css/pedidos/ViewPedido.module.css";
import axios from "axios";

function ViewPedido() {
  const { id, status } = useParams();

  const getBad = () => {
    axios.get(`https://129.148.27.50/api/pedido/update/bad/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
  };

  const getCancel = () => {
    axios.get(`https://129.148.27.50/api/pedido/cancel/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
  };

  const getGood = () => {
    axios.get(`https://129.148.27.50/api/pedido/update/good/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Mudar status do pedido {id}</h1>
        <h5 className={styles.subtitle}>Status atual: {status} </h5>
      </div>
      <div>
        <div>
          <div className={styles.botoes}>
            <button className={styles.retroceder} onClick={getBad}>Retroceder</button>
            <button className={styles.cancelar} onClick={getCancel}>Cancelar</button>
            <button className={styles.avancar} onClick={getGood}>Avançar</button>
          </div>
        </div>
      </div>
    </div>
  );
}



// -- Verificar transição gradual: 0 -> 1 -> 2 -> 3 -> 4
//   -- 1 -> 2, 5 ou 6
//   -- 2 -> 3, 5 ou 7
//   -- 3 -> 4, 5 ou 8
//   -- 4 fim de cadeia
//   -- 5 fim de cadeia
//   -- 6 -> 2 ou 5
//   -- 7 -> 3 ou 5
//   -- 8 -> 4 ou 5

// https://129.148.27.50/api/pedido/update/bad/{id}
// https://129.148.27.50/api/pedido/update/good/{id}
// https://129.148.27.50/api/pedido/cancel/{id}

export default ViewPedido;
