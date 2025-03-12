import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";
import {RxCrossCircled} from "react-icons/rx";
import {FiEdit2} from "react-icons/fi";
import './TodoItem.css'

const TodoItem = ({uuid, todoText, completed, onDeleteTodo, onCompleteTodo, onEditTodo}) => {
    const iconTypes = {
        'check':
            <IoCheckboxOutline
                onClick={() => onCompleteTodo(uuid)}
                className={"Icon Icon-check Icon-check--active"}
            />,
        'uncheck':
            <MdCheckBoxOutlineBlank
                onClick={() => onCompleteTodo(uuid)}
                className={"Icon Icon-check"}
            />,
        'delete':
            <RxCrossCircled
                onClick={() => onDeleteTodo(uuid)}
                className="Icon Icon-delete"
            />,
        'edit':
            <FiEdit2
                onClick={() => onEditTodo(uuid)}
                className={"Icon Icon-edit"}
            />
    }

    return (
        <>
            <li className="TodoItem rounded-2xl border-none">
                {completed ? iconTypes.check : iconTypes.uncheck}
                <p
                    className={`TodoItem-p ${completed && "TodoItem-p--complete"} text-[#98D2C0]`}>
                    {todoText}
                </p>
                <div>
                    {iconTypes.edit}
                    {iconTypes.delete}
                </div>
            </li>
        </>
    )
}

export {
    TodoItem
}