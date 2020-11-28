import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "./constants/style";
import TodoItem from "./TodoItem";
// 解構語法
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "done", isDone: true },
    { id: 2, content: "not done", isDone: false },
  ]);

  const [value, setValue] = useState("");
  const id = useRef(3);

  const handleButtonClick = () => {
    setTodos([
      {
        id: id.current,
        content: value,
      },
      ...todos,
    ]);
    setValue("");
    id.current++;
  };

  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) return;
    setTodos([
      {
        id: id.current,
        content: value,
      },
      ...todos,
    ]);
    setValue("");
    id.current++;
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleTogglerIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        // 如果不是要修改的 todo id 就直接回傳
        if (todo.id !== id) return todo;
        // 要修改的 todo id
        return {
          // todo 原本的東西
          ...todo,
          // 要修改的屬性
          isDone: !todo.isDone,
        };
      })
    );
  };

  const handleDeleteTodo = (id) => {
    // 若用 splice() 會改到原本的 todo，因此要用 filter()，留下該 id 以外的 todo
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleButtonClick}>Add Todo</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleTogglerIsDone={handleTogglerIsDone}
        />
      ))}
    </div>
  );
}

export default App;
