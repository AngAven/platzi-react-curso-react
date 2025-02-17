import {useContext} from "react";
import {TodoContext} from "../TodoContext";
import './TodoSearch.css'

const TodoSearch = () => {
    const {
        searchValue,
        setSearchValue
    } = useContext(TodoContext)
    return (
        <input
            onChange={e => setSearchValue(e.target.value)}
            className={'TodoSearch'}
            type="text"
            placeholder="Buy apples"
            value={searchValue}
        />
    )
}

export {
    TodoSearch
}