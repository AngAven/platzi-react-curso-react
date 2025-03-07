import './CreateTodoButton.css'

const CreateTodoButton = ({setOpenModal}) => {
    return (
        <button
            className={'CreateTodoButton'}
            type="button"
            onClick={() => setOpenModal(state => !state)}
        >
            ➕
        </button>
    )
}

export {
    CreateTodoButton
}