import './App.css'
import Form from './components/Form';
import Todo from './components/ToDoList';
import React, {useState,useEffect} from 'react';

function App() {
  const [inputText,setInputText]=useState("");
  const [toDolist,settoDolist]=useState([]);
  const [status,setStatus]=useState('All');
  const [filteredTodos,setfilteredTodos]=useState([]);

  useEffect(() => {
    saveToLocalStorage();
  }, []);

  const saveToLocalStorage=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos" , JSON.stringify([]));
    }
    settoDolist(JSON.parse(localStorage.getItem('todos')));
  }

  useEffect(() => {
    filterHandler();
    localStorage.setItem("todos" , JSON.stringify(toDolist));
  }, [toDolist , status ])

  const filterHandler=()=>{
    switch(status){
      case "completed":
        setfilteredTodos(toDolist.filter(item=>item.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(toDolist.filter(item=>item.completed === false));
        break;
      default:
        setfilteredTodos(toDolist);
        break;
    }
  };
  
  return (
    <div>
      <header>
        <h1>To Do List</h1>
      </header>
      <Form settoDolist={settoDolist} 
      toDolist={toDolist} 
      inputText={inputText} 
      setInputText={setInputText} 
      setStatus={setStatus}
       />
      <Todo toDolist={toDolist} settoDolist={settoDolist} filteredTodos={filteredTodos} />
      <footer>Create by Giorgi Dzirkvelishvili</footer>
    </div>
  );
}

export default App;
