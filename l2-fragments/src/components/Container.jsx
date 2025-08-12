import styles from "./Container.module.css";
const Container = (props) => {
  return (
    <>
      <div className={`${styles.child_props} border border-2 border-black`}>{props.children}</div>
    </>
  );
};

export default Container;
