import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && (
      <h4 className="text-success my-4">Enjoy your day!</h4>
    )
  ); 
};

export default WelcomeMessage;
