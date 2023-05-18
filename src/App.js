import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './pages/Header';

function App() {
  const [page, setPage] = useState("main");
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
