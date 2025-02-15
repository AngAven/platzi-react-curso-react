import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from "./components/TodoItem";
import {CreateTodoButton} from './components/CreateTodoButton'
import {useState} from "react";
import {makeTodos} from './fakes/todosFake'

function App() {
    const [searchValue, setSearchValue] = useState('')
    const [todos, setTodos] = useState(makeTodos())

    const completedTodos = todos.filter(todo => !!todo.completed)
    const numberCompletedTodos = completedTodos.length
    const totalTodos = todos.length
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase()
        const searchedText = searchValue.toLowerCase()

        if (todoText.includes(searchedText)) {
            return todo
        }
    })

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
                        return <TodoItem todo={todo.text} completed={todo.completed} key={todo.text}/>
                    })
                }
            </TodoList>

            <CreateTodoButton/>
        </div>
    );
}

export default App;
