import styles from "./AddTodo.module.css";

function AddTodo() {
  {
    /* Row 1 */
  }
  return (
    <div className="row mt-4">
      <div className="col-6 text-start">
        <input
          className="w-100"
          type="text"
          placeholder="Enter TODO here"
        ></input>
      </div>
      <div className="col-4">
        <input className="w-100" type="date"></input>
      </div>
      <div className="col-2">
        <button className={`btn btn-success ${styles.add_btn}`}>Add</button>
      </div>
    </div>
  );
}

export default AddTodo;
