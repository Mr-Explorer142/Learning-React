function AddTodo() {
  {
    /* Row 1 */
  }
  return (
    <div class="row mt-4">
      <div class="col-6 text-start">
        <input
          className="w-100"
          type="text"
          placeholder="Enter TODO here"
        ></input>
      </div>
      <div class="col-4">
        <input className="w-100" type="date"></input>
      </div>
      <div class="col-2">
        <button className="btn btn-success add-btn">Add</button>
      </div>
    </div>
  );
}

export default AddTodo;
