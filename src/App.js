import './App.css';
import { useState } from 'react';
import Task from './pages/TaskPage/Task';
import Tasks from './pages/Tasks/Tasks';
import Server from './server';

export default function App() {
  const [page, setPage] = useState("tasks");
  const [info, setInfo] = useState(null);
  const server = new Server();

  return (
    <div className="App">
      {page=="task" ? <Task setPage={setPage} info={info} server={server}></Task> :
                      <Tasks setPage={setPage} setInfo={setInfo} server={server}></Tasks>}
    </div>
  );
}
