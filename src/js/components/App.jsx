import React, { useState } from 'react';
import TodoList from './Todolist';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask.trim()
      }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Escribe una tarea y presiona Enter"
        />
      </div>

      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;