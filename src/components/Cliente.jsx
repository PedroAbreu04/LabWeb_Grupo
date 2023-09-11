import styles from "../module.css/Clientes.module.css"
import PageTitles from "./PageTitles";
import CardsClientes from "./CardsClientes"
import stylesLoading from "../module.css/Base.module.css"

function Cliente() {
    return (
      <div className={stylesLoading.fundo}> 

        <PageTitles title="Clientes"/>
        
        <div className={stylesLoading.cards}>
          <CardsClientes />
        </div>
      </div>
    );
  }
  
  export default Cliente;
  