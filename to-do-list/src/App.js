import { useState, useEffect } from 'react';
import './App.css';
import List from './List';
import Task from './Task';
import ToDoListData from './ToDoListData';

function App() {


const [toDoListData, setTasks] = useState([]);
const [title, setTitle] = useState([]);
const [completed, setCompleted] = useState([]);
const [list, updateList] = useState([]);


const updateTasks = () => {
  setTasks(toDoListData);
  setCompleted(completed);
}

const handleSubmit = (e) => {
  e.preventDefault();

  const newTask = {
    title: title,
    completed: false
  }

  setTasks([...toDoListData, newTask]);
  setTitle("");
  setCompleted("");
}

const addToList = (index) => {
  const currentTask = toDoListData[index];
  updateList([...list, currentTask]);
}

const removeFromList = (index) => {
  updateList([...list.slice(0, index), ...list.slice(index + 1)]);
}

useEffect(() => {
  updateTasks();
}, [list]);

return (

  <div>
    <h1>To Do List</h1>
    <h2> Add an Item</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" value={title} onChange={(e) => setTasks(e.target.value)} />
      <br />
      <input type="submit" value="Submit" />
    </form>

    <ul>
      {
        toDoListData.map((task, index) => {
          return <Task
          title={task.title}
          completed={task.completed}
          addToList={addToList}
          index={index}
          />
        })
      }
    </ul>

    <List tasks={list} removeFromList={removeFromList} />
  </div>
  );
}

export default App;
