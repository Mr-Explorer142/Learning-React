import { RiDeleteBin5Line } from "react-icons/ri";
function TodoItem({ itemName, itemDate, onDeleteClick }) {
  return (
    <div className="row mt-2">
      <div className="col-6 text-start">{itemName}</div>
      <div className="col-4 text-start">{itemDate}</div>
      <div className="col-2">
        <button
          className="btn btn-danger px-4"
          onClick={() => {
            onDeleteClick(itemName);
          }}
        >
          <RiDeleteBin5Line/>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
