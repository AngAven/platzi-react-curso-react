import {useState} from "react";
import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from "./components/TodoItem";
import {CreateTodoButton} from './components/CreateTodoButton'
import {makeTodos} from './fakes/todosFake'
import './App.css'

function App() {
    let localStorageTodos = localStorage.getItem('TODOS_V1')

    if (!localStorageTodos) {
        localStorage.setItem('TODOS_V1', JSON.stringify(makeTodos(10)))
    } else {
        localStorageTodos = JSON.parse(localStorageTodos)
    }

    const [searchValue, setSearchValue] = useState('')
    const [todos, setTodos] = useState(localStorageTodos)

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
        saveTodos([...newTodos])
    }

    const completeTodo = (todoText) => {
        const newTodos = todos
        const todoIndex = todos.findIndex(todo => todo.text === todoText)
        newTodos[todoIndex].completed = true
        saveTodos([...newTodos])
    }

    const saveTodos = (todos) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(todos))
        setTodos(todos)
    }

    return (
        <div className="App">
            <TodoCounter
                total={totalTodos}
                completed={numberCompletedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {
                    searchedTodos.map(todo => {
                        return <TodoItem
                            onCompleteTodo={completeTodo}
                            onDeleteTodo={deleteTodo}
                            todoText={todo.text}
                            completed={todo.completed}
                            key={todo.uuid}
                            date={todo.date}
                        />
                    })
                }
            </TodoList>

            <CreateTodoButton/>
        </div>
    );
}

export default App;
