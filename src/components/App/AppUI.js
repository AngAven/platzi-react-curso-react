import React from 'react';
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {TodosError} from "../TodosError/TodosError";
import {TodosLoading} from "../TodosLoading";
import {EmptyTodos} from "../EmptyTodos";

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
            {loading && <TodosLoading/>}

            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0)
                &&
                <EmptyTodos/>
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