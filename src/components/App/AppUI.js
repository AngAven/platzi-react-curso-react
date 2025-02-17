import React from 'react';
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";

const AppUi = ({
                   numberCompletedTodos,
                   totalTodos,
                   searchedTodos,
                   deleteTodo,
                   completeTodo,
                   searchValue,
                   setSearchValue
}) => {
    return (
        <div className="App">
            <TodoCounter
                total={totalTodos}
                completed={numberCompletedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {
                    searchedTodos.map(todo => {
                        return <TodoItem
                            onCompleteTodo={completeTodo}
                            onDeleteTodo={deleteTodo}
                            todoText={todo.text}
                            completed={todo.completed}
                            key={todo.uuid}
                            date={todo.date}
                        />
                    })
                }
            </TodoList>

            <CreateTodoButton/>
        </div>
    );
};

export {AppUi};