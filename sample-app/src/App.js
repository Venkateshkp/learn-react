// import logo from './logo.svg';
// import './App.css';
import React from "react";
import styles from "./App.module.css";
import {List} from "./List.jsx";
import AnotherList from "./AnotherList.jsx";
import logo from "./logo.svg";
var todo = ["eat", "sleep", "study"];
function App() {
  return(
    <div className={styles.color}>
      <h1>Unordered</h1>
      <List/>
      <h1>Ordered List</h1>
      <AnotherList/>
      {/* <img src="./logo192.png"></img> */}
      <ul>
        {todo.map((task) => (
          <TodoItem task = {task}/>
        ))}
      </ul>
      <img src={logo} ></img>
    </div>
  )
}
function TodoItem(props){
  console.log(props);
  const{task} = props;
  return <li>{task}</li>
}
export default App;

  // return (
    //return <div className="App">Helloworld</div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );

