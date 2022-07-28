import React from "react";
import './style.css'

function Input({onChangeHandler, title, body}) {
    return(
        <>
            <ul className="input-box">
                <li>제목<input 
                type="text"
                name="title"
                value={title}
                onChange={onChangeHandler}
                ></input></li>
                <li>내용<input 
                type="text"
                name="body"
                value={body}
                onChange={onChangeHandler}
                ></input></li>
            </ul>
            <button className="add-button">추가하기</button>
        </>
    )

}

export default Input