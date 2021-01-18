import React from 'react'

const Form = ({ setInputText, inputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            },
           
        ]);
        setInputText('');
    };
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="todo">Todo</option>
                    <option value="completado">Completado</option>
                    <option value="sincompletar">Sin Completar</option>
                </select>
            </div>
        </form>
    )
}

export default Form
