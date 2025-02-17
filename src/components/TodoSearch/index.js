import {TodoContext} from "../TodoContext";
import './TodoSearch.css'

const TodoSearch = () => {
    return (
        <TodoContext.Consumer>
            {({
                  searchValue,
                  setSearchValue
            }) => (
                <input
                    onChange={e => setSearchValue(e.target.value)}
                    className={'TodoSearch'}
                    type="text"
                    placeholder="Buy apples"
                    value={searchValue}
                />
            )}
        </TodoContext.Consumer>
    )
}

export {
    TodoSearch
}