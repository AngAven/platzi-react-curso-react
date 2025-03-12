import {TodoForm} from "../../ui/TodoForm";
import {useParams} from "react-router-dom";

function EditTodoPage() {
    const {uuid} = useParams()

    return (
        <div className={'w-full h-dvh flex flex-col justify-center items-center'}>
            <TodoForm
                todoTitle={'Edit todo'}
                todoAction={'Update'}
                uuid={uuid}
            >
            </TodoForm>
        </div>
    )
}

export {EditTodoPage};