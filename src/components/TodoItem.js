import './TodoItem.css'

const TodoItem = ({todoText, completed, date, onDeleteTodo, onCompleteTodo}) => {
    return (
        <>
            <li className="TodoItem">
                <span
                    onClick={() => onCompleteTodo(todoText)}
                    className={`Icon Icon-check ${completed && "Icon-check--active"}`}
                >V</span>
                <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                    {todoText}
                </p>
                {/*<em className="TodoItem-em">{date}</em>*/}
                <span
                    onClick={() => onDeleteTodo(todoText)}
                    className="Icon Icon-delete"
                >X</span>
            </li>
        </>
    )
}

export {
    TodoItem
}