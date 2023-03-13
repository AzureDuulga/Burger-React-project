import React from "react";
import style from "./style.module.css";

const BurgerIngredient = (props) => {
  if (props.type == "BreadTop")
    return (
      <div className={style.BreadTop}>
        <div className={style.Seed}></div>
        <div className={style.SeedSecond}></div>
        <div className={style.SeedThird}></div>
        <div className={style.SeedFourth}></div>
      </div>
    );
  if (props.type == "Salad") return <div className={style.Salad}></div>;
  if (props.type == "Salad") return <div className={style.Salad}></div>;
  if (props.type == "Meat") return <div className={style.Meat}></div>;
  if (props.type == "Cheese") return <div className={style.Cheese}></div>;
  if (props.type == "Bacon") return <div className={style.Bacon}></div>;
  if (props.type == "BreadBottom")
    return <div className={style.BreadBottom}></div>;

  return <div>..</div>;
};

export default BurgerIngredient;
