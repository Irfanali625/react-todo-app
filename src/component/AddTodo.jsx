function AddTodo() {
  return (
    <div className="container">
      <div className="row my-2 d-flex align-items-center justify-content-center">
        <div className="col-6">
          <input type="text" className="w-100 form-control" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" className="w-100 form-control" />
        </div>
        <div className="col-2">
          <button type="button"  className="btn btn-success w-100">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
