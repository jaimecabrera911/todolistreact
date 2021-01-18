import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((elm) => elm.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo rounded">
      <li className={`todo-item ${todo.completed?"completed":""}`}>{text}</li>
      <button
        onClick={completedHandler}
        type="button"
        className="complete-btn"
        id={`${todo.completed?"completed":""}`}
      > <i className="fas fa-check-square" /></button>
      <button onClick={deleteHandler} type="button" className="complete-btn">
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};

export default Todo;


/*todo.completed
  ? (<button
    onClick={completedHandler}
    type="button"
    className="complete-btn"
    id="completed"
    > <i className="fas fa-check-square" /></button>)
  : (<button
    onClick={completedHandler}
    type="button"
    className="complete-btn"
    ><i className="fas fa-check-square" /></button>)*/