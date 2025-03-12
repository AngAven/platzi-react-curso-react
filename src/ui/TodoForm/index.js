import React, {useContext, useEffect, useState} from 'react';
import {TodoContext} from "../../routes/TodoContext";
import {useNavigate} from "react-router-dom";
import './TodoForm.css'

const TodoForm = ({uuid, todoTitle, todoAction, defaultTodo}) => {
    const {
        addTodo,
        updateTodo,
        todos,
    } = useContext(TodoContext)
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = useState('')
    const [editableTodo, setEditableTodo] = useState(() => todos?.find(todo => todo.uuid === uuid))
    const [isEditable, setIsEditable] = useState(false)

    useEffect(() => {
        if (editableTodo) {
            setNewTodoValue(editableTodo?.text)
            setIsEditable(true)
        }

        if (!newTodoValue) {
            console.log('!defaultTodo?.text',  )
            if (!defaultTodo?.text) {
                console.log('nada existe')
            }
            setNewTodoValue(defaultTodo.text)
        }

    }, [editableTodo, uuid])

    const onSubmit = (e) => {
        e.preventDefault()
        if (isEditable) {
            updateTodo(uuid, newTodoValue)
            navigate('/')
        } else {
            addTodo(newTodoValue)
            navigate('/')
        }
    }

    const onCancel = () => {
        navigate('/')
    }

    const onChange = (e) => {
        const value = e.target.value;
        setNewTodoValue(value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="todoText">{todoTitle}</label>
            <textarea
                name={'todoText'}
                value={newTodoValue}
                onChange={e => onChange(e)}
                placeholder={'Buy threader tickets'}
            />

            <div className="Todo-Form-buttonContainer">
                <button
                    onClick={onCancel}
                    type="button"
                    className='TodoForm-button TodoForm-button--cancel'
                >Cancel
                </button>

                <button
                    type='submit'
                    onClick={e => onSubmit(e)}
                    className='TodoForm-button TodoForm-button--add'
                >{todoAction}
                </button>
            </div>
        </form>
    )
}

export {TodoForm};