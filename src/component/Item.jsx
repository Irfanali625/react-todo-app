function Item({item, onDeleteClick}) {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-6 col-md-6 fw-semibold">{item.name}</div>
      <div className="col-6 col-md-4 fw-semibold">{item.date}</div>
      <div className="col-12 col-md-2 d-flex gap-2">
        <button 
        onClick={() => onDeleteClick(item.name)}
        type="button" 
        className="btn btn-danger w-100 my-2">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
