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
                   setSearchValue,
                   loading,
                   error,
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
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {(!loading && searchedTodos.length === 0)
                &&
                <p>Crea tu primer ToDo</p>
            }

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