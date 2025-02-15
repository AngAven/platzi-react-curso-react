import {useState} from "react";
import './TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue}) => {
    const valueChanged = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }

    return (
        <>
            <input
                onChange={e => valueChanged(e)}
                className={'TodoSearch'}
                type="text"
                placeholder="Buy apples"
                value={searchValue}
            />
        </>
    )
}

export {
    TodoSearch
}