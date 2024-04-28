import { useState } from "react";

function AddTodo({onAddItem}) {
  const [todoName, setName] = useState("");
  const [todoDate, setDate] = useState("");

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleDateChange(event){
    setDate(event.target.value);
  }

  const handleButtonClick = () => {
    onAddItem(todoName, todoDate)
    setName("");
    setDate("");
  }

  return (
    <div className="container">
      <div className="row my-2 d-flex align-items-center justify-content-center">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            onChange={handleNameChange}
            className="w-100 form-control"
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input type="date"
          value={todoDate}
          onChange={handleDateChange}
           className="w-100 form-control" />
        </div>
        <div className="col-2">
          <button
            onClick={handleButtonClick}
          type="button" className="btn btn-success w-100">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
