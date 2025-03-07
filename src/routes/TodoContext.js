import React, {useState} from 'react';
import {useLocalStorage} from "../customHooks/useLocalStorage";
import {faker} from "@faker-js/faker/locale/es_MX";

const TodoContext = React.createContext()

const TodoProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState('')
    const {
        item: todos,
        saveItem: setTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', [])
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

    const deleteTodo = (uuid) => {
        const newTodos = todos.filter(todo => todo.uuid !== uuid)
        setTodos([...newTodos])
    }

    const completeTodo = (uuid) => {
        const newTodos = [...todos]
        const todoIndex = todos.findIndex(todo => todo.uuid === uuid)

        if (newTodos[todoIndex].completed) {
            newTodos[todoIndex].completed = false
            setTodos([...newTodos])
        } else {
            newTodos[todoIndex].completed = true
            setTodos([...newTodos])
        }
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        const item = {
            uuid: faker.string.uuid(),
            text: text,
            completed: false,
        }
        newTodos.push(item)
        setTodos(newTodos)
    }

    const editTodo = (uuid) => {
        const editTodo = todos.find(todo => todo.uuid === uuid)
        console.log(editTodo)
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
            addTodo,
            editTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};