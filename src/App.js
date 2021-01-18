import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const title = "To Do List";



  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("todo");
  const [filteredTodos, setFilteredTodos] = useState([])

  //use effect
  useEffect(() => {
    filterHandler();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completado':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'sincompletar':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }


  return (
    <div className="App">
      <header>
        <h1 className="bg bg-color-dark">{title}</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      ></Form>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}></TodoList >
    </div>
  );
}

export default App;
