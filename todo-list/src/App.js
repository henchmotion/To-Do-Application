import './styles.css';

import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (index, newName) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, name: newName } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="app-wrap">
      <h1>My To-do List</h1>
      <div className="form-wrap">
        <input placeholder="Enter a new task"
        type="text" value={newTask} onChange={handleChange} />
        <button className="add-task-btn" onClick={addTask}>Add Task</button>
      </div>
    
      {tasks.map((task, index) => (
        <div className="task-div" key={index}>
          <div>
            <li>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />
              {task.completed ? <s>{task.name}</s> : task.name}
            </li>
          </div>
          <div className="btn">
            <button className="editbtn" onClick={() => editTask(index, prompt('Edit task:', task.name))}>Edit</button>
            <button className="delbtn" onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
