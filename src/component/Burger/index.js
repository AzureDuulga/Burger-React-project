import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import style from "./style.module.css";

const Burger = (props) => {
  let content = [];

  const items = Object.entries(props.ingredients);

  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredient key={`${el[0]}+${i}`} type={el[0]} />);
    }
  });
  if (content.length === 0) content = <p>Please choose your ingredients</p>;
  return (
    <div className={style.Burger}>
      <BurgerIngredient type="BreadTop" />
      {content}
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

export default Burger;
