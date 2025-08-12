import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {todoItems.map((item) => {
        return (
          <TodoItem
            itemDate={item.dueDate}
            itemName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        );
      })}
    </>
  );
};

export default TodoItems;
