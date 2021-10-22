import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/Todolist';

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>@ManuUrbano To Do list!</h1>
      </header> 
      <Form inputText={inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText} />
      <TodoList  />
    </div>
  );
}

export default App;
