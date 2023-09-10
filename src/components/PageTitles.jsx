import { FaSistrix, FaSliders } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { BiSolidBell } from "react-icons/bi";
import { BsShop } from "react-icons/bs";

import styles from "../module.css/PageTitle.module.css";
import React from "react";

function PageTitles({ title }) {
  return (
    <div className={styles.nav}>
      <div className={styles.searchContainer}>
        <label htmlFor="inputSearch"><FaSistrix /></label> <input placeholder="Buscar produtos" id="inputSearch" type="text" className={styles.searchInput}/> <FaSliders />
      </div>

        <h1>{title}</h1>

      <div className={styles.icons}>
        <IoMdSunny />
        <BiSolidBell />
        <BsShop />
      </div>
    </div>
  );
}

export default PageTitles;
