import React from "react";
import './style.css'

function Todo({ todo, onDeleteHandler, onEditHandler }) {
    return ( 
        <div className="todo">
            <h3>{ todo.title }</h3>
            <p>{ todo.body }</p>
            <div className="button-box">
                <button onClick={ () => onDeleteHandler(todo.id)}>삭제하기</button>
                <button onClick={ () => onEditHandler(todo.id)}>{ todo.isDone ? "취소" : "완료" }</button>
            </div>
        </div>
    )

}

export default Todo