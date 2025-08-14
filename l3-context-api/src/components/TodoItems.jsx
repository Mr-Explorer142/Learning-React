import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  return (
    <>
      {todoItems.map((item) => {
        return (
          <TodoItem
            itemDate={item.dueDate}
            key={item.name}
            itemName={item.name}
          ></TodoItem>
        );
      })}
    </>
  );
};

export default TodoItems;
