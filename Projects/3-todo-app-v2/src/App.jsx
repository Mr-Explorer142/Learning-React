import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "30/07/25",
    },
    {
      name: "Go to University",
      dueDate: "30/07/25",
    },
    {
      name: "Watch this video",
      dueDate: "Right Now!",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="container text-center">
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
      </div>
    </center>
  );
}

export default App;
