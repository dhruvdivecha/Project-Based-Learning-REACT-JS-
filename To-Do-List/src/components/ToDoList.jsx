import ToDoCard from "./ToDoCard"

export default function ToDoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo } = props;
  return (
    <div>
      <ul className="main">
        {todos.map((todo, index) => (
          <ToDoCard
            key={index}
            index={index}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}
      </ul>
      
    </div>
  )
}
