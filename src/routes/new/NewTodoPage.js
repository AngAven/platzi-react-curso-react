import {TodoForm} from "../../ui/TodoForm";

function NewTodoPage() {
    return (
        <div className={'w-full h-dvh flex flex-col justify-center items-center'}>
            <TodoForm
                todoTitle={'Buy theatre tickets'}
                todoAction={'Add'}
            />
        </div>
    )
}

export {NewTodoPage};
