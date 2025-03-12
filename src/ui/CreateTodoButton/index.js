import './CreateTodoButton.css'

const CreateTodoButton = (props) => {
    return (
        <button
            className={'CreateTodoButton'}
            type="button"
            onClick={() => props.onClick()}
        >
            ➕
        </button>
    )
}

export {
    CreateTodoButton
}