import Item from "./Item";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="container text-left">
      {todoItems.map((item) => (
        <Item key={item.name} item={item} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
}

export default TodoItems;
