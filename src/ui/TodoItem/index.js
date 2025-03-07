import {MdOutlineDoneAll} from "react-icons/md";
import {RxCrossCircled} from "react-icons/rx";
import './TodoItem.css'

const TodoItem = ({todoText, completed, onDeleteTodo, onCompleteTodo}) => {
    const iconTypes = {
        'check':
            <MdOutlineDoneAll
                onClick={() => onCompleteTodo(todoText)}
                className={"Icon Icon-check Icon-check--active"}
            />,
        'uncheck':
            <MdOutlineDoneAll
                onClick={() => onCompleteTodo(todoText)}
                className={"Icon Icon-check"}
            />,
        'delete':
            <RxCrossCircled
                onClick={() => onDeleteTodo(todoText)}
                className="Icon Icon-delete"
            />,
    }

    return (
        <>
            <li className="TodoItem">
                {completed ? iconTypes.check : iconTypes.uncheck}
                <p
                    className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                    {todoText}
                </p>
                {iconTypes.delete}
            </li>
        </>
    )
}

export {
    TodoItem
}