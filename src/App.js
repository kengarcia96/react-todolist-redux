import React from 'react';
import './App.css';
import TodoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1>To-Do List</h1>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
