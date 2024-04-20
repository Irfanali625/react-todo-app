import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import TodoItems from "./component/TodoItems";

function App() {

  const todoItems = [
    {
      todoName: 'First task',
      dueDate: '12/02/2024'
    },
    {
      todoName: 'Second task',
      dueDate: '12/02/2024'
    },
    {
      todoName: 'Third task',
      dueDate: '12/02/2024'
    },
    {
      todoName: 'Fourth task',
      dueDate: '12/02/2024'
    }
  ]

  return (
    <div className="container p-4">
      <div className="border p-2 rounded shadow-sm">
          <AppName />
          <AddTodo />
          <TodoItems todoItems={todoItems} />
        </div>
    </div>
  );
}

export default App;
