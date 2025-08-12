function TodoItem2() {
  {
    /* Row 3 */
  }

  let itemName = "Go to University";
  let itemDate = "17/01/25";

  return (
    <div class="row mt-2">
      <div class="col-6 text-start">{itemName}</div>
      <div class="col-4 text-start">{itemDate}</div>
      <div class="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem2;
