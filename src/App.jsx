import { useState } from "react";
import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import TodoItems from "./component/TodoItems";
import Message from "./component/Message";

function App() {


  const [todoItems, setTodoItems] = useState([])

  const handleTodoItems = (todoItem, dueDate) => {
    const newTodoItems = [...todoItems, {name: todoItem, date: dueDate}];
    setTodoItems(newTodoItems);
  }
  
  function handleDeleteItem(todoItemName){
    const newTodoItems = todoItems.filter(item => item.name != todoItemName);
    setTodoItems(newTodoItems)
  }

  return (
    <div className="container p-4">
      <div className="border p-2 rounded shadow-sm">
          <AppName />
          <AddTodo onAddItem={handleTodoItems} />
          {todoItems.length === 0 && <Message></Message>}
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
        </div>
    </div>
  );
}

export default App;
