import { useState } from "react"
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const title = "To Do List"
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1 className="bg bg-color-dark">{title}{inputText}</h1>
      </header>
      <Form setInputText={setInputText} inputtext={inputText} todos={todos} setTodos={setTodos}></Form>
      <TodoList ></TodoList>
    </div>
  )
}

export default App;