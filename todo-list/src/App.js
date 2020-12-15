import { useState, useEffect } from 'react';
import Task from './Task';
import List from './List';

import './App.css';

function App() {
  const [list, setTasks] = useState([]);
  const [title, setTitle] = useState("");


  const updateTasks = () => {
    setTasks(list);
    console.log(list);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title
    }

    setTasks([...list, newTask]);
    setTitle("");
  }

  const removeFromList = (index) => {
    updateTasks([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  useEffect(() => {
    updateTasks();
    console.log("use effect");
  }, []);

  return (
    <div className="App">
    <h1>Amanda.do</h1>
    <h2>What glass ceilings <br />will you break today?</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value="Add Task" />
    </form>

    <List listItem={list} removeFromList={removeFromList}/>
    </div>
  )
}

export default App;
