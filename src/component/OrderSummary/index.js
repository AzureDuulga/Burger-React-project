import React from "react";
import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд: </p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredients_Names[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <strong>
        <p>Таны захиалгын дүн: {props.price}₮</p>
      </strong>
      <Button clicked={props.close} btnType="Danger" text="Татгалзах" />
      <Button
        clicked={props.continueOrder}
        btnType="Success"
        text="Үргэлжлүүлэх"
      />
    </div>
  );
};

export default OrderSummary;
