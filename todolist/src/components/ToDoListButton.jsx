import { useState } from 'react';

function ToDoListButton({ todoId, index, deleteTodo, editTodo, moveTodoUp, moveTodoDown }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setNewTaskName('');
  };

  const handleSave = () => {
    if (newTaskName.trim()) {
      editTodo(todoId, newTaskName);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <span>
        <button onClick={() => moveTodoUp(index)}>👆</button>
      </span>
      <span>
        <button onClick={() => moveTodoDown(index)}>👇</button>
      </span>
      <span>
        <button onClick={() => deleteTodo(todoId)}>🗑️</button>
      </span>
      <span>
        <button onClick={handleEdit}>✏️</button>
      </span>

      {/* Popup for editing */}
      {isEditing && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Edit Task</h3>
            <input
              type="text"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              placeholder="Enter new task name"
            />
            <div className="popup-buttons">
              <button className='btn-save' onClick={handleSave}>Save</button>
              <button className='btn-cancel' onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ToDoListButton;
