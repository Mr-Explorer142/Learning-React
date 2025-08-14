import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ itemName, itemDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="row mt-2">
      <div className="col-6 text-start">{itemName}</div>
      <div className="col-4 text-start">{itemDate}</div>
      <div className="col-2">
        <button
          className="btn btn-danger px-4"
          onClick={() => {
            deleteItem(itemName);
          }}
        >
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
