import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]); // State variable to store tasks
  const [newTask, setNewTask] = useState(''); // State variable for input field

  // Add new task to the list
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Remove a task from the list
  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Conditional Rendering for Empty List */}
      {tasks.length === 0 ? (
        <p>No tasks left!</p>
      ) : (
        <ul>
          {/* Render tasks dynamically using .map() */}
          {tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => removeTask(task)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;