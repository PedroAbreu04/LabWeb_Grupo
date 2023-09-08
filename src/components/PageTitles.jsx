import { FaSistrix, FaSliders } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { BiSolidBell } from "react-icons/bi";
import { BsShop } from "react-icons/bs";

import styles from "../module.css/PageTitle.module.css";

function PageTitles({ title }) {
  return (
    <div className={styles.nav}>
      <span>
        <FaSistrix /> <input type="text" /> <FaSliders />
      </span>

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
