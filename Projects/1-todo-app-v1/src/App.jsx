import './App.css';
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItem1 from './components/TodoItem1';
import TodoItem2 from './components/TodoItem2';

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <div class="container text-center">
        <AddTodo></AddTodo>
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
