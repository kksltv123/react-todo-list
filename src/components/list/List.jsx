import React from "react";
import Todo from "../todo/Todo";
import './style.css';

function List({ todos, setTodos }) {
    const onDeleteHandler = (todoId) => {
        const newTodos = todos.filter((todo) => 
            todo.id !== todoId
        )
        setTodos(newTodos)
    }

    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === todoId) {
                return { ...todo, isDone: !todo.isDone};
            }else {
                return { ...todo };
            }
        })
        setTodos(newTodos)
    }

    return (
        <div className="contents">
            <div className="working-wrap">
                <h3>Working...🦝</h3>
                <div className="todo-box">
                    {todos.map((todo) => {
                        if (!todo.isDone) {
                            return (
                                <Todo
                                    key={todo.id}
                                    todo={todo}
                                    onDeleteHandler = {onDeleteHandler}
                                    onEditHandler = {onEditHandler}
                                />

                            )
                        }else return null
                    })}
                </div>
            </div>
            <div className="done-wrap">
                <h3>Done...🐶</h3>
                <div className="todo-box">
                    {todos.map((todo) => {
                        if (todo.isDone) {
                            return (
                                <Todo
                                    key={todo.id}
                                    todo={todo}
                                    onDeleteHandler = {onDeleteHandler}
                                    onEditHandler = {onEditHandler}
                                />

                            )
                        }else return null
                    })}
                </div>
            </div>
        </div>
    )
}

export default List