import './TodoItem.css'

const TodoItem = ({todo, completed}) => {
    return (
        <>
            <li className="TodoItem">
                <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</span>
                <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                    {todo}
                </p>
                <span className="Icon Icon-delete">X</span>
            </li>
        </>
    )
}

export {
    TodoItem
}