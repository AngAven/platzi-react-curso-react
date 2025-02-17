import React, {useState} from 'react';
import {useLocalStorage} from "../../customHooks/useLocalStorage";
const TodoContext = React.createContext()

const TodoProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState('')
    const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage('TODOS_V1', [])
    const [openModal, setOpenModal] = useState(false)
    const completedTodos = todos.filter(todo => !!todo.completed)
    const numberCompletedTodos = completedTodos.length
    const totalTodos = todos.length
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase()
        const searchedText = searchValue.toLowerCase()

        if (todoText.includes(searchedText)) {
            return todo
        }

        return 0
    })

    const deleteTodo = (todoText) => {
        const newTodos = todos.filter(todo => todo.text !== todoText)
        setTodos([...newTodos])
    }

    const completeTodo = (todoText) => {
        const newTodos = todos
        const todoIndex = todos.findIndex(todo => todo.text === todoText)
        newTodos[todoIndex].completed = true
        setTodos([...newTodos])
    }

    return (
        <TodoContext.Provider value={{
            numberCompletedTodos,
            totalTodos,
            searchedTodos,
            deleteTodo,
            completeTodo,
            searchValue,
            setSearchValue,
            loading,
            error,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};