import React from "react";
import style from "./style.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.clicked}
      className={`${style.Button} ${style[props.btnType]}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
