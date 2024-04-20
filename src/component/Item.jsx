function Item({item}) {
  return (
    <div className="row">
      <div className="col-6 col-md-6 fw-semibold">{item.todoName}</div>
      <div className="col-6 col-md-4 fw-semibold">{item.dueDate}</div>
      <div className="col-12 col-md-2 d-flex gap-2">
        <button type="button" className="btn btn-primary w-100 my-2">
          Edit
        </button>
        <button type="button" className="btn btn-danger w-100 my-2">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
