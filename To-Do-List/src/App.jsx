import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  function handleUpdateTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodo(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodo(newTodoList);
  }

  function handleEditTodo(index) {
    const todoToEdit = todos[index];
    setInputValue(todoToEdit);
    setEditingIndex(index);
  }

  function handleSaveEdit() {
    if (editingIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = inputValue;
      setTodo(updatedTodos);
      setInputValue("");
      setEditingIndex(null);
    } else {
      handleUpdateTodo(inputValue);
    }
  }

  return (
    <>
      <ToDoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSaveEdit={handleSaveEdit}
        editingIndex={editingIndex}
      />
      <ToDoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
