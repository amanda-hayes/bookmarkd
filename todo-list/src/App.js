import { useState, useEffect } from 'react';
import Task from './Task';
import List from './List';

import './App.css';

function App() {
  const [list, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  // const [completed, setCompleted] = useState(false);
  // const [list, updateList] = useState([]);

  const updateTasks = () => {
    setTasks(list);
    console.log(list);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title
    }

  

  const addToList = (index) => {
    const currentTask = list[index];
    updateList([...list, currentTask]);
  }

  const removeFromList = (index) => {
    updateList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  useEffect(() => {
    updateTasks();
    console.log("use effect");
  }, []);

  return (
    <div>
    <h1>To Do List App</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Task Name</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value="Add Task" />
    </form>

    

    <List listItem={list} removeFromList={removeFromList} />
    </div>
  )
}

export default App;
