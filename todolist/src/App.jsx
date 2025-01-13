import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const url = 'http://localhost:3000';

  // Fetch todos
  const getTodos = async () => {
    try {
      const response = await fetch(`${url}/todo/get-todos`);
      const data = await response.json();
      const todosWithCompletion = data.map((todo) => ({
        ...todo,
        completed: false, // Add completed status
      }));
      setTodos(todosWithCompletion);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Add a new todo
  const addTodo = async (taskName) => {
    try {
      const response = await fetch(
        `${url}/todo/add-todo?task_name=${encodeURIComponent(taskName)}`,
        {
          method: 'POST',
        }
      );
      if (!response.ok) throw new Error('Failed to add todo');
      const data = await response.json();
      setTodos([...todos, { ...data, completed: false }]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${url}/todo/delete-todo?id=${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error(`Failed to delete todo with id ${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Edit a todo
  const editTodo = (id, newTaskName) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task_name: newTaskName } : todo
    );
    setTodos(updatedTodos);
  };

  // Toggle completion status
  const toggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Move a todo up
  const moveTodoUp = (index) => {
    if (index === 0) return;
    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] = [
      newTodos[index],
      newTodos[index - 1],
    ];
    setTodos(newTodos);
  };

  // Move a todo down
  const moveTodoDown = (index) => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    [newTodos[index], newTodos[index + 1]] = [
      newTodos[index + 1],
      newTodos[index],
    ];
    setTodos(newTodos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <Form addTodo={addTodo} />
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleCompletion={toggleCompletion}
        moveTodoUp={moveTodoUp}
        moveTodoDown={moveTodoDown}
      />
    </>
  );
}

export default App;
