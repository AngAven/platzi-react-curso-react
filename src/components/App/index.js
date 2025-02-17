import {useEffect, useState} from "react"
import {useLocalStorage} from "../../customHooks/useLocalStorage"
import {makeTodos} from '../../fakes/todosFake'
import './App.css'
import {AppUi} from "./AppUI";

function App() {
    const [searchValue, setSearchValue] = useState('')
    const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage('TODOS_V1', [])
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
        <AppUi
            numberCompletedTodos={numberCompletedTodos}
            totalTodos={totalTodos}
            searchedTodos={searchedTodos}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
            error={error}
        />
    );
}

export {App}
