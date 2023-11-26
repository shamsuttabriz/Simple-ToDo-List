import React, { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css';
import TodoItems from './TodoItems';

let count = 0;

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const addTask = () => {
        setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }]);
        inputRef.current.value = "";
    }

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")));
    }, [])

    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 100)
    }, [todos])

    return (
        <div className="main-todo">
            <div className='todo-container'>
                <div className="todo-header">To-Do List</div>
                <div className="todo-add">
                    <input ref={inputRef} type="text" className='todo-input' placeholder='Enter your text' />
                    <button onClick={() => addTask()} className='todo-btn' type='submit'>Add Task</button>
                </div>
                <div className="todo-list">
                    {
                        todos.map((item, index) => {
                            return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} ></TodoItems>
                        })
                    }
                </div>
                <div className="delete-todos">

                </div>
            </div>
        </div>
    )
}

export default Todo;