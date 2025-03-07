import {useContext} from "react";
import {TodoContext} from "../../routes/TodoContext";
import './TodoCounter.css'

const TodoCounter = () => {
    const {
        totalTodos: total,
        numberCompletedTodos: completed
    } = useContext(TodoContext)

    return (
        <h1 className="TodoCounter">
            You have completed <span>{completed}</span> of <span>{total}</span> TODOs
        </h1>
    )
}

export {
    TodoCounter
}