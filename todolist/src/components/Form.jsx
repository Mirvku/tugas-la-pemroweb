import React, { useState } from 'react';

function Form({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div className="wrapper">
      <header>
        <h3>📜 MY TODO</h3>
      </header>
      <form className="input-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default Form;
