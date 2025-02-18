import React, {useContext, useState} from 'react';
import './TodoForm.css'
import {TodoContext} from "../TodoContext";

const TodoForm = () => {
    const {
        setOpenModal,
        addTodo,
    } = useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        const value = e.target.value;
        setNewTodoValue(value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Write new ToDo</label>
            <textarea
                value={newTodoValue}
                onChange={e => onChange(e)}
                placeholder={'Do homework'}
            />

            <div className="Todo-Form-buttonContainer">
                <button
                    onClick={onCancel}
                    type="button"
                    className='TodoForm-button TodoForm-button--cancel'
                >Cancel
                </button>

                <button
                    onClick={e => onSubmit(e)}
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >Add
                </button>
            </div>
        </form>
    )
}

export {TodoForm};