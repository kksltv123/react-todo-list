import React from "react";
import { useState, useRef } from "react";
import Input from "../input/Input";
import './style.css'

function Form({ todos, setTodos }) {
    const initialState = {
        id: 0,
        title: '',
        body: '',
        isDone: false
    }

    const [inputs, setInputs] = useState(initialState)


    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setInputs({ ...inputs, [name]: value })
    }

    const { title, body } = inputs; 

    const nextId = useRef(2)

    const onSubmitHandler = (event) => {
            const todo = {
                id: nextId.current,
                title,
                body
            }
            event.preventDefault()
            setTodos([ ...todos, todo ])
            setInputs(initialState)
            nextId.current += 1;
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-box">
                <Input
                    title = {title}
                    body = {body}
                    onChangeHandler = {onChangeHandler}
                />
            </div>
        </form>
    )
}

export default Form