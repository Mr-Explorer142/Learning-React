import { createContext, useReducer } from "react";


export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});


// Reducer function -> It is called a pure function. Because it is not inside the App() function
const todoItemsReducer = (currTodoItem, action) => {
  let newTodoItems = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItem.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({children}) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // Actions and Dispatchs
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }} 
    >
      {children}
    </TodoItemsContext.Provider>
};

export default TodoItemsContextProvider;
