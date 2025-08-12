function TodoItem({ itemName, itemDate }) {
  return (
    <div className="row mt-2">
      <div className="col-6 text-start">{itemName}</div>
      <div className="col-4 text-start">{itemDate}</div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
