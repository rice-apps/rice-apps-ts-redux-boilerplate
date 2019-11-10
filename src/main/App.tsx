import React from "react";
import "./App.css";
import IncompleteTodoDisplay from './todo/IncompleteTodoDisplay';
import CompleteTodoDisplay from './todo/CompleteTodoDisplay';
import NewTodoControl from "./todo/NewTodoControl";
import ColorSelectControl from "./background/ColorSelectControl";

const App: React.FC = () => {
  return (
  <div className="App" style={{ display: "inline" }}>
      <div style={{paddingTop: 8}}>
          <NewTodoControl />
          <ColorSelectControl />
      </div>
      <IncompleteTodoDisplay />
      <CompleteTodoDisplay />
  </div> 
  );
};

export default App;