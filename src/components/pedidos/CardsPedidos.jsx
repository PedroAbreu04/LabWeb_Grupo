import { Link } from 'react-router-dom'
import styles from "../../module.css/clientes/CardsClientes.module.css";
import base from "../../module.css/template/BaseDashboard.module.css"

import colorPedido from "../../module.css/pedidos/CardsPedido.module.css"

function CardsPedidos({ pedidos }) {

  return pedidos.map((pedido) => (

    <div className={`${styles.container} ${pedido} ${base.hover} ${!pedido.status ? styles.disabledCustomer : ""} `} key={pedido.id}>
      <div className={styles.cardBody}>
        <p className={styles.id}>#{pedido.id}</p>
        <div className={styles.customer}>
          <div>
            <p>Pedido: {pedido.id}</p>
            <p className={styles.p_email}> Id Cliente:: {pedido.customer_id}</p>
            <p> Status: {teste(pedido.status)} </p>
          </div>
        </div>
      </div>

      <div className={styles.botao}>
        <Link className={styles.btnVi}  to={`/dashboard/pedido/${pedido.id}/${pedido.status}`}>Mudar Status</Link>
      </div>

    </div>
  
  ));

  function teste(status) {
    switch (status) {
      case 0:
        return <span className={colorPedido.neutro}>Carrinho</span>
      case 1:
        return <span className={colorPedido.neutro}>Emitido</span>
      case 2:
        return <span className={colorPedido.bom}>Pagamento Aprovado</span>
      case 3:
        return <span className={colorPedido.bom}>Em Transporte</span>
      case 4:
        return <span className={colorPedido.bom}>Recebido</span>
      case 5:
        return <span className={colorPedido.ruim}>Cancelado</span>
      case 6:
        return <span className={colorPedido.ruim}>Pagamento não Aprovado</span>
      case 7:
        return <span className={colorPedido.ruim}>Problemas com o transporte</span>
      case 8:
        return <span className={colorPedido.ruim}>Problemas no recebimento</span>
      default:
        return <span className={colorPedido.erro}>Erro</span>
    }
  }
}

export default CardsPedidos;
