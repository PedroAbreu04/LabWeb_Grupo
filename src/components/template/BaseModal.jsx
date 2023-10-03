import {
    Modal,
    Typography,
    Box,
  } from "@mui/material";

import React, { useState, useEffect, useRef } from "react";
import styles from "../../module.css/template/BaseModal.module.css"



function BaseModal({isOpen, setCloseModal, titulo, texto}){
  if(isOpen){

    return(
        <Modal open={true} onClose={setCloseModal}>
        <Box className={styles.box}>
          <Typography
            component="h1"
            className={styles.title}
          >
            {titulo}
          </Typography>

          <Typography
            id="modal-modal-title"
            component="h3"
            className={styles.text}
          >
            {texto}
          </Typography>
        </Box>
      </Modal>
    )
  }else{
    return null
  }
}

export default BaseModal