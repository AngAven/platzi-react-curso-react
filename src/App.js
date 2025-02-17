import {useState} from "react";
import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from "./components/TodoItem";
import {CreateTodoButton} from './components/CreateTodoButton'
import {makeTodos} from './fakes/todosFake'
import './App.css'

function App() {
    const [searchValue, setSearchValue] = useState('')
    const [todos, setTodos] = useState(makeTodos(10))

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
