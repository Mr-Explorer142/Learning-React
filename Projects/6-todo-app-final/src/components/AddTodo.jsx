import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleOnButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="row mt-4">
      <div className="col-6 text-start">
        <input
          className="w-100"
          type="text"
          placeholder="Enter TODO here"
          onChange={handleNameChange}
          value={todoName}
        ></input>
      </div>
      <div className="col-4">
        <input className="w-100" type="date" onChange={handleDateChange} value={dueDate}></input>
      </div>
      <div className="col-2">
        <button
          className={`btn btn-success ${styles.add_btn}`}
          onClick={handleOnButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
