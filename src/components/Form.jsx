import React from 'react'

const Form = ({setInputText,inputText,toDolist,settoDolist,setStatus}) => {
    
    const inputTextHandler=(e)=>{
        setInputText(e.target.value);
        
    }
    
    const submitTextHandler=(e)=>{
        e.preventDefault();
        settoDolist([...toDolist,{text:inputText, completed:false, id:Math.random()*1000}]);
        setInputText('');
    }

    const statusChanger=(e)=>{
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTextHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select onChange={statusChanger} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
      </form>
    )
}

export default Form
