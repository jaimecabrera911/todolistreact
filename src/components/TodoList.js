import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {


    localStorage.setItem('todos', JSON.stringify(todos))
    let lista = JSON.parse(localStorage.getItem('todos'))

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} todo={todo} setTodos={setTodos} todos={todos} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList
