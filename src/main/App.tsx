import React from "react";
import logo from "../assets/logo.svg";
import ColorSelectControl from './components/ColorSelectControl';
import IncompleteTodoDisplay from './components/IncompleteTodoDisplay';
import CompleteTodoDisplay from './components/CompleteTodoDisplay';
import "./App.css";

const App: React.FC = () => {
  return (
  <div className="App" style={{ display: "inline" }}>
      <ColorSelectControl />
      <IncompleteTodoDisplay />
      <CompleteTodoDisplay />
  </div> 
  );
};

export default App;