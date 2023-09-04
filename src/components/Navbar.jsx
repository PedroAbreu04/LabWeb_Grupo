import React from 'react';
import styles from "../module.css/Navbar.module.css";
import { Home, Person, Settings, AddShoppingCartOutlined, ContactsSharp, ArticleSharp, GitHub } from '@mui/icons-material';
import { NavLink } from 'react-router-dom/dist';

function Navbar() {
  return (
        <div className={`${styles.sidebar}`}>

            <div className={`${styles.images}`}>
                <img alt="Logo" src={`https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} className={`${styles.logo}`} />
                <img alt="Profile" src={`https://images.pexels.com/photos/17815428/pexels-photo-17815428/free-photo-of-fotografia-animal-fotografia-de-animais-border-collie-prado.jpeg`} className={`${styles.profile}`} />
            </div>

            <div className={`${styles.listItems}`}>
                <NavLink className={`${styles.items}`}><Home /> <p>Dashboard</p></NavLink>
                <NavLink className={`${styles.items}`}><AddShoppingCartOutlined /> <p>Pedidos</p></NavLink>
                <NavLink className={`${styles.items}`}><Person /> <p>Usuarios</p></NavLink>
                <NavLink className={`${styles.items}`}><ContactsSharp /> <p>Clientes</p></NavLink>
                <NavLink className={`${styles.items}`}><ArticleSharp /> <p>Produtos</p></NavLink>
                <NavLink className={`${styles.items}`}><Settings /> <p>Configurações</p></NavLink>
            </div>

            <div className={`${styles.footer}`}>
                <a href="/home"><GitHub  className={`${styles.footerIcons}`} /></a>
            </div>
        </div>
  );
}

export default Navbar;