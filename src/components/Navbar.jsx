import { useState, React } from 'react';
import styles from "../module.css/Navbar.module.css";
import { Home, Person, Settings, AddShoppingCartOutlined, ArticleSharp, GitHub  } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MapIcon from '@mui/icons-material/Map';
import TableRowsIcon from '@mui/icons-material/TableRows';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { NavLink } from 'react-router-dom/dist';
function Navbar() {

    const [sidebar, setSidebar] = useState(true)
    const [activeLink, setActiveLink] = useState(null);

    function sidebarF() {
        setSidebar( ( sidebar ) ? false : true )
    }

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

  return (
        <div className={`${styles.sidebar} ${sidebar ? styles.active : styles.close}`}>

            <div className={styles.header}> 
                <button onClick={sidebarF} className={ styles.btnSidebar }> <MenuOpenIcon /> </button>
            </div>
            
            <div className={`${styles.images}`}>
                <img alt="Logo" src={`https://gecommerce.com.br/wp-content/uploads/2020/05/cropped-Logo-RGB_Negativo.png`} className={`${styles.logo}`} />
                <img alt="Profile" src={`https://cdn-icons-png.flaticon.com/512/219/219969.png`} className={`${styles.profile}`} />

            </div>


            <div className={`${styles.listItems}`}>
                <NavLink className={`${styles.items} ${ activeLink === 'link1' ? styles.active : ''}`}  onClick={() => handleLinkClick('link1')}>
                    <Home /> 
                    <small> Painel de Controle </small>
                </NavLink>

                <NavLink className={`${styles.items} ${ activeLink === 'link2' ? styles.active : ''}`}  onClick={() => handleLinkClick('link2')}>
                    <AddShoppingCartOutlined /> 
                    <small> Pedidos </small>
                </NavLink>

                <NavLink className={`${styles.items} ${ activeLink === 'link3' ? styles.active : ''}`}  onClick={() => handleLinkClick('link3')}>
                    <Person /> 
                    <small> Usuarios </small>
                </NavLink>

                <NavLink className={`${styles.items} ${ activeLink === 'link4' ? styles.active : ''}`}  onClick={() => handleLinkClick('link4')}>
                    <GroupIcon /> 
                    <small> Clientes </small>
                </NavLink>

                <NavLink className={`${styles.items} ${ activeLink === 'link5' ? styles.active : ''}`}  onClick={() => handleLinkClick('link5')}>
                    <ArticleSharp /> 
                    <small> Produtos </small>
                </NavLink>

                <NavLink className={`${styles.items} ${ activeLink === 'link6' ? styles.active : ''}`}  onClick={() => handleLinkClick('link6')}>
                    <EqualizerIcon /> 
                    <small> Analytics </small>
                </NavLink>

                <NavLink className={`${styles.items} ${ activeLink === 'link7' ? styles.active : ''}`}  onClick={() => handleLinkClick('link7')}>
                    <MapIcon /> 
                    <small> Mapa de Clientes </small>
                </NavLink> 

                <NavLink className={`${styles.items} ${ activeLink === 'link8' ? styles.active : ''}`}  onClick={() => handleLinkClick('link8')}>
                    <TableRowsIcon /> 
                    <small> Tabelas </small>
                </NavLink>

                <NavLink className={`${styles.items} ${ activeLink === 'link9' ? styles.active : ''}`}  onClick={() => handleLinkClick('link9')}>
                    <Settings /> 
                    <small> Configurações </small>
                </NavLink>
            </div>

            <div className={`${styles.footer}`}>
                <a href=""><GitHub  className={`${styles.footerIcons}`} /></a>
                <button> <LogoutIcon /> <small> Sair </small>  </button> 
            </div>
        </div>
  );
}

export default Navbar;