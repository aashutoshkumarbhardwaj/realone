import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  //useState ? state
  const [selectedid, setSelectedId] = useState(1);
  return (
    <div>
      <button onClick={function (){
        setSelectedId(1);
      }}>1</button>
      <button onClick={function (){
        setSelectedId(2);
      }
      }>2</button>
      <button onClick={function (){
        setSelectedId(3);
      }
      }>3</button>
      <button onClick={function (){
        setSelectedId(4);
      }
      }>4</button>
      <button onClick={function (){
        setSelectedId(5);
      }
      }>5</button>
      <TodoDetails id={selectedid} />
     
    </div>
  ); 
}

function TodoDetails({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    setTimeout(() => {
      axios
      .get("https://jsonplaceholder.typicode.com/todos?id=" + id)
      .then((response) => {
        setTodo(response.data[0]); // Corrected data access
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
    }, 5000);
 
  }, [id]); // Added id to dependency array

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description || "No description available"}</h4>
    </div>
  );
}

export default App;