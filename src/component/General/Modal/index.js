import React from "react";
import Shadow from "../Shadow";
import style from "./style.module.css";

const Modal = (props) => {
  return (
    <>
      <Shadow show={props.show} close={props.close} />
      <div
        onClick={props.close}
        style={{
          transform: props.show ? "translateY(0" : "translateY(-100vh",
          opacity: props.show ? "1" : "0",
        }}
        className={style.Modal}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
