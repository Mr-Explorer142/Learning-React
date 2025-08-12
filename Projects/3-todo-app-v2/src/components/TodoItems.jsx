import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item) => {
        return (
          <TodoItem itemDate={item.dueDate} itemName={item.name}></TodoItem>
        );
      })}
    </>
  );
};

export default TodoItems;
