import styles from "../module.css/Clientes.module.css"
import PageTitles from "./PageTitles";

function Cliente() {
    return (
      <div className={styles.fundo}> 

        <PageTitles title="Clientes"/>
        
        <div className={styles.cards}>
          CLIENTE
        </div>
      </div>
    );
  }
  
  export default Cliente;
  