import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();

    if (todo) {
      setTodos((prev) => [...prev, { id: nanoid(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
