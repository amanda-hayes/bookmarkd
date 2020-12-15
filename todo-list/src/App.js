import { useState, useEffect } from 'react';
import Task from './Task';
import List from './List';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [list, updateList] = useState([]);

  const updateList = () => {
    setTasks(toDoListData);
    console.log(toDoListData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: title
    }
  }

  setTasks([...toDoListData, newTask]);
  setTitle("");

  const addToList = (index) => {
    const currentTask = toDoListData[index];
    updateList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  useEffect(() => {
    updateList();
    console.log("use effect");
  }, []);

  return (
    
  )
}

export default App;
