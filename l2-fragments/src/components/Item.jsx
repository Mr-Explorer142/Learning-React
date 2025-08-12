import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleOnClick = () => {
  //   console.log(`${foodItem} was bought successfully`);
  // };

  return (
    <>
      {/* Custom CSS Module implemented here */}
      <li
        className={`${styles.li_item} list-group-item bg-light fw-bold ${
          bought && "active"
        }`}
      >
        <span>{foodItem}</span>
        <button
          onClick={handleBuyButton}
          className="btn btn-primary fw-bold float-end"
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
