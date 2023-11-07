import { Modal, Box } from "@mui/material";
import styles from "../module.css/Navbar.module.css";
import { useState, useEffect } from 'react'

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

const divLogOut = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px',
  width: '100%',
}

const divBtnLogOut = {
  border: 'none',
  maxWidth: '300px',
  width: '100%',
}

const btnStyle = {
  border: '1px solid rgb(255, 103, 1)',
  backgroundColor: 'transparent',
  borderRadius: '5px',
  padding: '15px 0',
  color: 'white',
  width: '50px',
  fontSize: '16px',
  cursor: 'pointer',
}
const imgStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '200px',
  alingItens: 'center'
}

function NoPerm( {onClose} ) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };


  useEffect(() => { handleOpen() }, []);

  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={styles.divLogOut}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Stop_hand_icon.svg/768px-Stop_hand_icon.svg.png" alt="image" style={imgStyle} />

          <p style={{ textAlign: "center" }}>
            Permissão negada<br/>
            Contate os Administradores
          </p>

          <div className={styles.divBtnLogOut}>
            <button onClick={handleClose}> Fechar </button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default NoPerm
