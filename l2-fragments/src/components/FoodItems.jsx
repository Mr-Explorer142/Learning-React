import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (event, item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-content-center vh-100">
        <ul className="list-group col-12 col-lg-5 text-center">
          {items.map((item) => {
            return (
              <Item
                key={item}
                foodItem={item}
                bought={activeItems.includes(item)}
                handleBuyButton={(event) => onBuyButton(event, item)}
              ></Item>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FoodItems;
