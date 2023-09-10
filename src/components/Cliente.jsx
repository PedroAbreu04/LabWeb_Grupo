import styles from "../module.css/Clientes.module.css"
import PageTitles from "./PageTitles";
import CardsClientes from "./CardsClientes"

function Cliente() {
    return (
      <div className={styles.fundo}> 

        <PageTitles title="Clientes"/>
        
        <div className={styles.cards}>
          <CardsClientes />
        </div>
      </div>
    );
  }
  
  export default Cliente;
  