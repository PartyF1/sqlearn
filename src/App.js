import './App.css';
import { useState } from 'react';
import Task from './pages/TaskPage/Task';
import Tasks from './pages/Tasks/Tasks';
import Server from './server';

export default function App() {
  const [page, setPage] = useState("tasks");
  const [task, setTask] = useState(null);
  const server = new Server();

  return (
    <div className="App">
      {page=="task" ? <Task setPage={setPage} task={task} server={server}></Task> :
                      <Tasks setPage={setPage} setTask={setTask} server={server}></Tasks>}
    </div>
  );
}
