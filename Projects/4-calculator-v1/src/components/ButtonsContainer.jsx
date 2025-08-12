import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ buttonNames }) => {
  return (
    <>
      {buttonNames.map((btn) => (
        <button className="rounded col-3">{btn}</button>
      ))}
    </>
  );
};

export default ButtonsContainer;
