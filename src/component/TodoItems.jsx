import Item from "./Item";

function TodoItems({ todoItems }) {
  return (
    <div className="container text-left">
      {todoItems.map((item) => (
        <Item item={item}/>
      ))}
    </div>
  );
}

export default TodoItems;
