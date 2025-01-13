import ToDoListButton from './ToDoListButton';

function ToDoList({ todos, deleteTodo, editTodo, toggleCompletion, moveTodoUp, moveTodoDown }) {
  return (
    <div className="wrapper">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <div className="left">
              <button onClick={() => toggleCompletion(todo.id)}>
                {todo.completed ? '✅' : '◻️'}
              </button>
            </div>
            <div className={`center ${todo.completed ? 'completed' : ''}`}>
              {todo.task_name}
            </div>
            <div className="right">
              <ToDoListButton
                todoId={todo.id}
                index={index}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                moveTodoUp={moveTodoUp}
                moveTodoDown={moveTodoDown}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
