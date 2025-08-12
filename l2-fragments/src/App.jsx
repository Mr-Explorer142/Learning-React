import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([
    "Dates, Honey & Nuts 🍯",
    "Bread 🍞",
    "Green Vegetables 🫛",
    "Eggs 🥚",
    "Milk 🥛",
  ]);

  const handleOnKey = (event) => {
    // console.log(event.target.value);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItems(newFoodItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-center my-5 text-secondary">
          Healthy Food list 📃
        </h1>
        <FoodInput handleOnKey={handleOnKey}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p className="text-center py-3 text-primary lead fw-bold">Above is the list of healthy foods</p>
      </Container> */}
    </>
  );
}

export default App;
