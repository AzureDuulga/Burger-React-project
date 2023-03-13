import React from "react";
import MenuItem from "../MenuItem";
import styles from "./style.module.css";

const Menu = () => {
  return (
    <div>
      <ul className={styles.Menu}>
        <MenuItem active link="/">
          ШИНЭ ЗАХИАЛГА
        </MenuItem>
        <MenuItem link="/login">НЭВТРЭХ</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
