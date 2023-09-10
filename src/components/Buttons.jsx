import React from 'react';
import styles from "../module.css/Buttons.module.css"

export function ButtonSend() {

  return (
    <div>
      <button className={styles.buttonSend}>Enviar</button>
    </div>
  );
}


export function ButtonClose({ onClick }) {

    return (
      <div>
        <div onClick={onClick} className={styles.buttonClose}>Fechar</div>
      </div>
    );
};