import React, { Component } from "react";
import BuildControls from "../../component/BuildControls";
import Burger from "../../component/Burger";
import Modal from "../../component/General/Modal";
import OrderSummary from "../../component/OrderSummary";

const ingredients_Price = { Salad: 150, Cheese: 250, Bacon: 800, Meat: 1500 };
const ingredients_Names = {
  Salad: "Салад",
  Meat: "Мах",
  Bacon: "Байкон",
  Cheese: "Бяслага",
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Cheese: 0,
      Bacon: 0,
      Meat: 0,
    },
    totalPrice: 1000,
    disabledOrderButton: true,
    confirmOrder: false,
  };

  continueOrder = () => alert("Are you sure?");
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeModal = () => {
    this.setState({ confirmOrder: false });
  };

  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const totalNewPrice = (this.state.totalPrice += ingredients_Price[type]);
    this.setState({
      disabledOrderButton: false,
      totalPrice: totalNewPrice,
      ingredients: newIngredients,
    });
  };
  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const totalNewPrice = (this.state.totalPrice -= ingredients_Price[type]);
      this.setState({
        disabledOrderButton: totalNewPrice <= 1000,
        totalPrice: totalNewPrice,
        ingredients: newIngredients,
      });
    }
  };

  render() {
    const disabledingredients = { ...this.state.ingredients };
    for (let key in disabledingredients) {
      disabledingredients[key] = disabledingredients[key] <= 0;
    }

    return (
      <div>
        <Modal show={this.state.confirmOrder} close={this.closeModal}>
          <OrderSummary
            close={this.closeModal}
            continueOrder={this.continueOrder}
            ingredients={this.state.ingredients}
            ingredients_Names={ingredients_Names}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <div>Орцны удирдлага</div>
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredients_Names={ingredients_Names}
          price={this.state.totalPrice}
          disabledingredients={disabledingredients}
          disabledOrderButton={this.state.disabledOrderButton}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
        />
      </div>
    );
  }
}
