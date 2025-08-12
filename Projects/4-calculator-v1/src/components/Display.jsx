import styles from "./Display.module.css"
const Display = () => {
  return (
    <>
      <input type="text" className={`${styles.display} fs-3 mt-4 border border-2 rounded border-secondary`}></input>
    </>
  );
};


export default Display;