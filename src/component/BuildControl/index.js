import React from "react";
import style from "./style.module.css";

const BuildControl = (props) => {
  return (
    <div className={style.BuildControl}>
      <div className={style.label}>{props.orts}</div>
      <button
        onClick={() => props.ortsNemeh(props.type)}
        className={style.More}
      >
        Нэмэх
      </button>
      <button
        disabled={props.disabled[props.type]}
        onClick={() => props.ortsHasah(props.type)}
        className={style.Less}
      >
        Хасах
      </button>
    </div>
  );
};

export default BuildControl;
