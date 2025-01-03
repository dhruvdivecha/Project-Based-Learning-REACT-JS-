
export default function ToDoCard(props) {
    const { todo, handleDeleteTodo, handleEditTodo, index } = props;

  return (
    <li className="todoItem">
      <p>{todo}</p>
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-regular fa-pen-to-square"></i> Edit
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-regular fa-trash-can"></i> Delete
        </button>
      </div>
    </li>
  )
}
