import { FaSistrix, FaSliders } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { BiSolidBell } from "react-icons/bi";
import { BsShop } from "react-icons/bs";

import styles from "../module.css/PageTitle.module.css";

function PageTitles({ title }) {
  return (
    <div className={styles.nav}>
      <div className={styles.input_container}>
        <FaSistrix className={`${styles.icon} ${styles.iconL}`} />
        <input type="text" placeholder="Buscar"/>
        <FaSliders className={`${styles.icon} ${styles.iconR}`} />
      </div>

      <h1 className={styles.title}>{title}</h1>

      <div className={styles.icons}>
        <IoMdSunny />
        <BiSolidBell />
        <BsShop />
      </div>
    </div>
  );
}

export default PageTitles;
