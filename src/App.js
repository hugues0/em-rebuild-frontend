import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
} 

export default App;
