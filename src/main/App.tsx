import React from "react";
import TodoControls from './components/TodoControls';
import IncompleteTodoDisplay from './components/IncompleteTodoDisplay';
import CompleteTodoDisplay from './components/CompleteTodoDisplay';
import Feedback from './components/Feedback';
import "./App.css";


const App: React.FC = () => {
  return (
  <div className="App" style={{ display: "inline" }}>
    
    <Feedback />
  </div> 
  );
};

export default App;