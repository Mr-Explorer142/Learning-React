import { MdFormatListBulletedAdd } from "react-icons/md";
import { useRef, useContext } from "react";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);
  

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleOnButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <form className="row mt-4" onSubmit={handleOnButtonClicked}>
      <div className="col-6 text-start">
        <input
          className="w-100"
          type="text"
          ref={todoNameElement}
          placeholder="Enter TODO here"
          // onChange={handleNameChange}
          // value={todoName}
        ></input>
      </div>
      <div className="col-4">
        <input
          className="w-100"
          type="date"
          ref={dueDateElement}
          // onChange={handleDateChange}
          // value={dueDate}
        ></input>
      </div>
      <div className="col-2">
        <button type="submit" className={`btn btn-success ${styles.add_btn}`}>
          <MdFormatListBulletedAdd />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
