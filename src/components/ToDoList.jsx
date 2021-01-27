import React from 'react'
import ToDo from './ToDo';

const ToDoList = ({toDolist,settoDolist,filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(item=>(
                    <ToDo toDolist={toDolist} todo={item} key={item.id}  settoDolist={settoDolist} filteredTodos={filteredTodos} />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
