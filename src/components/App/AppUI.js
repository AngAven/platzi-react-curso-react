import React, {useContext} from 'react';
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {TodosError} from "../TodosError/TodosError";
import {TodosLoading} from "../TodosLoading";
import {EmptyTodos} from "../EmptyTodos";
import {TodoContext} from "../TodoContext";

const AppUi = () => {
    const {
        searchedTodos,
        deleteTodo,
        completeTodo,
        loading,
        error,
    } = useContext(TodoContext)
    return (
        <div className="App">
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length === 0)
                    &&
                    <EmptyTodos/>
                }

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