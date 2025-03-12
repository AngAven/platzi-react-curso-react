import {TodoForm} from "../../ui/TodoForm";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function EditTodoPage() {
    const {uuid} = useParams()
    const defaultTodo = useLocation()

    return (
        <div className={'w-full h-dvh flex flex-col justify-center items-center'}>
            <TodoForm
                todoTitle={'Edit todo'}
                todoAction={'Update'}
                uuid={uuid}
                defaultTodo={defaultTodo.state}
            >
            </TodoForm>
        </div>
    )
}

export {EditTodoPage};