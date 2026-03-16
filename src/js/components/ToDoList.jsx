import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const ToDoList = () => {

    const [task, setTask] = useState([{
        title: "Hacer la cama", done: false, id: 0
    }
    ]);
    const [taskInput, setTaskInput] = useState('');
    const [isHovered, setHovered] = useState(true)


    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (taskInput != "") {
            setTask([

                ...task,
                {
                    title: taskInput, done: false, id: task.length
                }
            ])
        }

        setTaskInput('');
    };

    const deleteTask = (taskID) => {

        const newTasks = task.filter(task => task.id !== taskID)
        setTask(newTasks);

        if (newTasks.length === 0) alert("No hay mas tareas por favor agrega una")

    }

    const taskRender = task.map(task => (

        <li className="list-group-item p-2" key={task.id}
/*             onMouseEnter={() => setHovered(false)}
            onMouseLeave={() => setHovered(true)}> */>

            <div className="view position-relative ">
                <label>{task.title}</label>
                <button className="btn position-absolute top-50 end-0 translate-middle p-0"
                    onClick={() => deleteTask(task.id)}
                   /*  style={{ display: isHovered ? 'none' : 'show' }} */>
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
        </li>

    ))

    return (
        <section className="container col-10 d-flex flex-column justify-content-center mt-5 border border-2 shadow">
            <header className="header text-center p-2">
                <h1>TO DOS</h1>
            </header>

            <form onSubmit={handleFormSubmit}>
                <input autoFocus={true}
                    className="form-control p-2 todo mb-2"
                    value={taskInput}
                    placeholder="¿Qué falta por hacer?"
                    onChange={(e) => (setTaskInput(e.target.value))} />
            </form>

            <section className="main">
                <ul className="list-group todo-list">
                    {taskRender}
                </ul>
            </section>
            <footer className="footer p-2">
                <span className="todo-count">
                    <strong>{task.filter(task => !task.done).length}</strong> item left
                </span>
            </footer>
        </section>
    );


}

export default ToDoList;