import logo from './platzi.webp';

import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from "./components/TodoItem";
import {CreateTodoButton} from './components/CreateTodoButton'

const defaultTodos = [
    {
        text: 'buy soup',
        completed: true,
    },
    {
        text: 'throw out the trash',
        completed: false,
    },
    {
        text: 'buy sun glasses',
        completed: true,
    },
    {
        text: 'go to cinema',
        completed: true,
    },
]

function App() {
    return (
        <div className="App">
            <TodoCounter
                total={5}
                completed={2}
            />
            <TodoSearch/>
            <TodoList>
                {
                    defaultTodos.map(todo => {
                       return  <TodoItem todo={todo.text} completed={todo.completed} key={todo.text}/>
                    })
                }
            </TodoList>

            <CreateTodoButton/>
        </div>
    );
}

export default App;
