import React from "react";
import Shadow from "../General/Shadow";
import Logo from "../Logo";
import Menu from "../Menu";
import styles from "./style.module.css";

const Sidebar = () => {
  return (
    <div>
      <Shadow show />
      <div className={styles.Sidebar}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
