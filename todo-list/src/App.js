import { useState, useEffect } from 'react';
import Task from './Task';
import List from './List';
import './App.css';

function App() {
  const [toDoListData, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  // const [completed, setCompleted] = useState(false);
  const [list, updateList] = useState([]);

  const updateTasks = () => {
    setTasks(toDoListData);
    console.log(toDoListData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title
    }

    setTasks([...toDoListData, newTask]);
    setTitle("");
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

    <List listItem={list} removeFromList={removeFromList} />
    </div>
  )
}

export default App;
