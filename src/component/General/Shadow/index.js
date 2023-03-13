import React from "react";
import style from "./style.module.css";

const Shadow = (props) => {
  return props.show ? (
    <div onClick={props.close} className={style.Shadow}></div>
  ) : null;
};

export default Shadow;
