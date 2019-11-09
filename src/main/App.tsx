import React from "react";
import TodoControls from './components/TodoControls';
import IncompleteTodoDisplay from './components/IncompleteTodoDisplay';
import CompleteTodoDisplay from './components/CompleteTodoDisplay';
import "./App.css";

const App: React.FC = () => {
  return (
  <div className="App" style={{ display: "inline" }}>
      <TodoControls />
      <IncompleteTodoDisplay />
      <CompleteTodoDisplay />
  </div> 
  );
};

export default App;