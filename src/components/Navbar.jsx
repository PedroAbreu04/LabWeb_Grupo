import { useState, React } from "react";
import styles from "../module.css/Navbar.module.css";
import {
  Home,
  Person,
  Settings,
  AddShoppingCartOutlined,
  ArticleSharp,
  GitHub,
} from "@mui/icons-material";

import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MapIcon from "@mui/icons-material/Map";
import TableRowsIcon from "@mui/icons-material/TableRows";
import MenuIcon from "@mui/icons-material/Menu";

import { Modal, Typography, Button, Box } from "@mui/material";

import { NavLink } from "react-router-dom/dist";

const style = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alingItens: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "rgb(22, 27, 34)",
  width: 450,
  height: 'auto',
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
  color: "white",
  fontFamily: "Hanuman",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgb(182, 178, 178, 0.5)",
    borderRadius: "6px",
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "rgb(182, 178, 178, 0.8)",
  },
  "@media (max-width: 767px)": {
    width: "90%",
  },
};

function Navbar( { userImagePath }) {
  const [sidebar, setSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("link1");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function sidebarF() {
    setSidebar(sidebar ? false : true);
  }

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const closeNavbarMobile = () => {
    if (window.innerWidth <= 767) {
      sidebarF();
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className={styles.navBar}>
      <div
        className={`${styles.sidebar} ${
          sidebar ? styles.active : styles.close
        }`}
      >
        <div className={styles.header}>
          <button onClick={sidebarF} className={styles.btnSidebar}>
            {" "}
            <MenuIcon />{" "}
          </button>
        </div>

        <div className={`${styles.images}`}>
          {/* <img alt="Logo" src={`/images/logo.png`} className={`${styles.logo}`} /> */}
          <img
            alt="Profile"
            src={userImagePath}
            className={`${styles.profile}`}
          />
        </div>

        <div className={`${styles.listItems}`}>
          <NavLink
            to="/dashboard"
            className={`${styles.items} 
                        ${activeLink === "link1" ? styles.active : ""}`}
            onClick={() => {
              handleLinkClick("link1");
              closeNavbarMobile();
            }}
          >
            <Home />
            <small> Painel de Controle </small>
          </NavLink>

          <NavLink
            to="/dashboard/pedidos"
            className={`${styles.items} 
                        ${activeLink === "link2" ? styles.active : ""}`}
            onClick={() => {
              handleLinkClick("link2");
              closeNavbarMobile();
            }}
          >
            <AddShoppingCartOutlined />
            <small> Pedidos </small>
          </NavLink>

          <NavLink
            to="/dashboard/usuarios"
            className={`${styles.items} 
                        ${activeLink === "link3" ? styles.active : ""}`}
            onClick={() => {
              handleLinkClick("link3");
              closeNavbarMobile();
            }}
          >
            <Person />
            <small> Usuarios </small>
          </NavLink>

          <NavLink
            to="/dashboard/clientes"
            className={`${styles.items} 
                        ${activeLink === "link4" ? styles.active : ""}`}
            onClick={() => {
              handleLinkClick("link4");
              closeNavbarMobile();
            }}
          >
            <GroupIcon />
            <small> Clientes </small>
          </NavLink>

          <NavLink
            to="/dashboard/produtos"
            className={`${styles.items} ${
              activeLink === "link5" ? styles.active : ""
            }`}
            onClick={() => {
              handleLinkClick("link5");
              closeNavbarMobile();
            }}
          >
            <ArticleSharp />
            <small> Produtos </small>
          </NavLink>

          <NavLink
            to="/dashboard/analitycs"
            className={`${styles.items} ${
              activeLink === "link6" ? styles.active : ""
            }`}
            onClick={() => {
              handleLinkClick("link6");
              closeNavbarMobile();
            }}
          >
            <EqualizerIcon />
            <small> Analytics </small>
          </NavLink>

          <NavLink
            className={`${styles.items} ${
              activeLink === "link7" ? styles.active : ""
            }`}
            onClick={() => {
              handleLinkClick("link7");
              closeNavbarMobile();
            }}
          >
            <MapIcon />
            <small> Mapa de Clientes </small>
          </NavLink>

          <NavLink
            to="/dashboard/tabelas"
            className={`${styles.items} ${
              activeLink === "link8" ? styles.active : ""
            }`}
            onClick={() => {
              handleLinkClick("link8");
              closeNavbarMobile();
            }}
          >
            <TableRowsIcon />
            <small> Tabelas </small>
          </NavLink>

          <NavLink
            to="/dashboard/config"
            className={`${styles.items} ${
              activeLink === "link9" ? styles.active : ""
            }`}
            onClick={() => {
              handleLinkClick("link9");
              closeNavbarMobile();
            }}
          >
            <Settings />
            <small> Configurações </small>
          </NavLink>
        </div>

        <div className={`${styles.footer}`}>
          <a
            href="https://github.com/PedroAbreu04/LabWeb_Grupo"
            target="_blank"
            className={`${styles.gitIcon}`}
          >
            <GitHub />
          </a>
          <button onClick={handleOpen}>
            <LogoutIcon style={{ transform: "rotate(180deg)" }} />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileBtn}`} onClick={sidebarF}>
        <MenuIcon />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.divLogOut}>
            <LogoutIcon style={{ fontSize: "100px" }} />

            <p style={{ textAlign: "center" }}>
              Você realmente deseja sair? <br />
              Trabalhe mais um pouco
            </p>

            <div className={styles.divBtnLogOut}>
              <button onClick={logOut}> Sim, desejo sair. </button>
              <button onClick={handleClose}>  Não, manter-se logado </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Navbar;
