import styles from "../../module.css/template/BaseModal.module.css"
import {
    Modal,
    Typography,
    Box,
  } from "@mui/material";

  function ModalPedidos({isOpen, setCloseModal, data }){
    if(isOpen){
  
      return(
          <Modal open={true} onClose={setCloseModal}>
          <Box className={styles.box}>
            <Typography
              component="h1"
              className={styles.title}
            >
              Mudar Status
            </Typography>
  
            <Typography
              id="modal-modal-title"
              component="h3"
              className={styles.text}
            >

            

            </Typography>
          </Box>
        </Modal>
      )
    }else{
      return null
    }
  }
  
  export default ModalPedidos