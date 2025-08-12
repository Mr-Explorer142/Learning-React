import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        className={`${styles.display} fs-3 mt-4 border border-2 rounded border-secondary`}
        value={displayValue}
        readOnly
      ></input>
    </>
  );
};

export default Display;
