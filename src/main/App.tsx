import React from "react";
import TodoControls from './components/TodoControls';
import ConcreteCharts from './components/ConcreteCharts';
import CompleteTodoDisplay from './components/CompleteTodoDisplay';
import "./App.css";

const App: React.FC = () => {
  return (
  <div className="App" style={{ display: "inline" }}>
      <TodoControls />
      <ConcreteCharts />
      <CompleteTodoDisplay />
  </div> 
  );
};

export default App;