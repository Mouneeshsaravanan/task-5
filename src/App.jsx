import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTodo = [...todos];
      updatedTodo[editIndex] = input;
      setTodos(updatedTodo);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const deleteToDo = (indexValue) => {
    const deleteTodoList = todos.filter((todo, index) => index !== indexValue);
    setTodos(deleteTodoList);
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  }
  
  return (
    <div className="App">
      <div className="container">
        <h1 className="todo_title">To-Do App</h1>
        <form className="todo_forms" onSubmit={addTodo}>
          <input
            className="todo_task_input"
            type="text"
            placeholder="Enter the task to be done"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit" className="todo_add_btn">
            Add
          </button>
        </form>
        <ul className="todo_list">
          {todos.map((toDoTask, index) => {
            return (
              <li key={index} className="todo_single">
                <span className="todo_task_bar">{toDoTask}</span>
                <button className="todo_edit" onClick={() => editTodo(index)}>
                  Edit
                </button>
                <button
                  onClick={() => deleteToDo(index)}
                  className="todo_delete"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
