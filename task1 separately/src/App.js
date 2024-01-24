import React, { useState, useEffect } from 'react';
import './App.css';
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('active');

  useEffect(() => {
    // Retrieve tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Store tasks in local storage whenever tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name, status };
    setTasks([...tasks, newTask]);
    setName('');
  };

  const filterTasks = () => {
    switch (status) {
      case 'active':
        return tasks.filter(task => task.status === 'active');
      case 'completed':
        return tasks.filter(task => task.status === 'completed');
        case 'Pending':
        return tasks.filter(task => task.status === 'Pending');
        case 'Archive':
        return tasks.filter(task => task.status === 'Archive');
      default:
        return tasks.sort((a, b) => {
          if (a.status === 'active') return -1;
          if (a.status === 'completed' && b.status !== 'active') return -1;
          return 1;
        });
    }
  };
const handleFilterClick = (newStatus) => {
    setStatus(newStatus);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Archive">Archive</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={() => handleFilterClick('all')}>All</button>
        <button onClick={() => handleFilterClick('active')}>Active</button>
        <button onClick={() => handleFilterClick('completed')}>Completed</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filterTasks().map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskManager;
