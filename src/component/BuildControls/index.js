import React from "react";
import BuildControl from "../BuildControl";
import style from "./style.module.css";

const BuildControls = (props) => {
  return (
    <div className={style.BuildControls}>
      <p>
        Нийт үнэ: <strong>{props.price}₮</strong>
      </p>
      {Object.keys(props.ingredients_Names).map((el) => (
        <BuildControl
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disabled={props.disabledingredients}
          orts={props.ingredients_Names[el]}
          type={el}
          key={el}
        />
      ))}
      <button
        disabled={props.disabledOrderButton}
        className={style.OrderButton}
        onClick={() => props.showConfirmModal()}
      >
        Захиалах
      </button>
    </div>
  );
};

export default BuildControls;
