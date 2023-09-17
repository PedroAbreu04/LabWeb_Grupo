import { FaSistrix, FaSliders } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { BiSolidBell } from "react-icons/bi";
import { BsShop } from "react-icons/bs";

import styles from "../module.css/HeaderDashboard.module.css";
import React from "react";

function PageTitles({ title }) {
  return (
    <div className={styles.nav}>


      <h1 className={styles.title}> {title} </h1>

      <div className={styles.container}>
          <div className={styles.iconsContainer}>
            <IoMdSunny />
            <BiSolidBell />
            <BsShop />
          </div>

          <div className={styles.searchContainer}>
            <input placeholder={`Buscar ${title}`} id="inputSearch" type="text" className={styles.searchInput} />
            <label htmlFor="inputSearch"><FaSistrix /></label>
          </div>

          <div className={styles.filterContainer}>
            <FaSliders />
          </div>
      </div>

    </div>
  );
}

export default PageTitles;
