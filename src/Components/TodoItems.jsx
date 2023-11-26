import React from 'react';
import './CSS/TodoItems.css';
import notTick from './Assets/not_tick.png';
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';

const TodoItems = ({ no, display, text, setTodos }) => {

    const deleteItem = no => {
        let data = JSON.parse(localStorage.getItem("todos"));

        data = data.filter((todo) => todo.no !== no);
        setTodos(data);
    }

    const toggle = no => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-through";
                }
                else {
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }
    return (
        <div className='todo-items'>
            <div className={`todo-items-container ${display}`} onClick={() => toggle(no)} >
                {display ? <img src={tick} className='todo-image' alt="Not Tick" /> : <img src={notTick} className='todo-image' alt="Tick" />}
                <div className='todos-text'>{text}</div>
            </div>
            <img className='todos-cross-icon' onClick={() => deleteItem(no)} src={cross} alt="Cross" />
        </div >
    )
}

export default TodoItems;