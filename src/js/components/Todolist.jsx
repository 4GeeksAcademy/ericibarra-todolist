import React from 'react';

const TodoList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="tasks-list">
      {tasks.length === 0 ? (
        <p className="empty-message">No hay tareas, añadir tareas</p>
      ) : (
        tasks.map(task => (
          <div 
            key={task.id}
            className="task-item"
          >
            <span>{task.text}</span>
            <button
              className="delete-btn"
              onClick={() => onDeleteTask(task.id)}
            >
              ×
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;