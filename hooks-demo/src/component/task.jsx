import React from "react";

const Task = () => {
  const [query, setQuery] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const handleChange = (event) => {
    const {value} = event.target;
    setQuery(value);
  }
  const addTodo = () => {
    const payload = {
      todo: query,
      status: false,
    }
    let updateTasks = [...tasks, payload];
    setTasks(updateTasks);
  }
  return(
    <>
      <h1>Todo List</h1>
      <input placeholder="add something" onChange={handleChange} value={query}></input>
      <button onClick={addTodo}>Add Item</button>
      {tasks.map(({todo, status}, idx) => (
        <div key={idx}>{todo}</div>
      ))}
    </>
  );
};
export {Task}