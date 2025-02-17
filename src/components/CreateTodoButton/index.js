import './CreateTodoButton.css'

const CreateTodoButton = () => {
    return (
        <button
            className={'CreateTodoButton'}
            type="button"
            onClick={(e) => {
                console.log(e.target)
            }}
        >
            ➕
        </button>
    )
}

export {
    CreateTodoButton
}