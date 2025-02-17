import {TodoContext} from "../TodoContext";
import './TodoCounter.css'

const TodoCounter = () => {
    return (
        <TodoContext.Consumer>
            {({
                  totalTodos: total,
                  numberCompletedTodos: completed
              }) => (
                <h1 className="TodoCounter">
                    You have completed <span>{completed}</span> of <span>{total}</span> TODOs
                </h1>
            )}
        </TodoContext.Consumer>
    )
}

export {
    TodoCounter
}