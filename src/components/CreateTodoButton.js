import './CreateTodoButton.css'

const CreateTodoButton = () => {
    return (
        <button
            className={'CreateTodoButton'}
            type="button"
            onClick={() => {
                console.log('new one')
            }}
        >
            ➕
        </button>
    )
}

export {
    CreateTodoButton
}