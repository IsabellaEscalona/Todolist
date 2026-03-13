import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoList = () => {

    const [task, setTask] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setTask([

            ...task,
            {
                title: taskInput, done: false, id: Math.floor() * 10
            }
        ])

        console.log(setTaskInput)
        setTaskInput('');
    };

    const deleteTask = (taskID) => {

        setTask(task.filter(task => task.id !== taskID));

    }

    const taskRender = task.map(task => (

        <li className="list-group-item" key={task.id}>
            <div className="view">
                <label>{task.title}</label>
                <button className="destroy" onClick={() => deleteTask(task.id)}><FontAwesomeIcon icon={faX} /></button>
            </div>
        </li>

    ))

    return (
        <section className="toDoApp">
            <header className="header">
                <h1>TO DOS</h1>
            </header>

            <form onSubmit={handleFormSubmit}>
                <input autoFocus={true}
                    className="todo"
                    value={taskInput}
                    placeholder="¿Qué falta por hacer?"
                    onChange={(e) => (setTaskInput(e.target.value))} />
            </form>

            <section className="main">
                <ul className="todo-list">
                    {taskRender}
                </ul>
            </section>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{task.filter(task => !task.done).length}</strong> item left
                </span>
            </footer>
        </section>
    );


}

export default ToDoList;