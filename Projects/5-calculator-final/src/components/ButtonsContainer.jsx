import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ buttonNames, onButtonClick }) => {
  return (
    <>
      {buttonNames.map((btn) => (
        <button
          className="rounded col-3"
          onClick={() => {
            onButtonClick(btn);
          }}
        >
          {btn}
        </button>
      ))}
    </>
  );
};

export default ButtonsContainer;
