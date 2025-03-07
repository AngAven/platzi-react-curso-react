import React, {useContext} from 'react';
import {TodoCounter} from "../../ui/TodoCounter";
import {TodoSearch} from "../../ui/TodoSearch";
import {TodoList} from "../../ui/TodoList";
import {TodoItem} from "../../ui/TodoItem";
import {CreateTodoButton} from "../../ui/CreateTodoButton";
import {TodosError} from "../../ui/TodosError/TodosError";
import {TodosLoading} from "../../ui/TodosLoading";
import {EmptyTodos} from "../../ui/EmptyTodos";
import {Index} from "../../ui/Modal";
import {TodoContext} from "../TodoContext";
import {TodoForm} from "../../ui/TodoForm";

const HomePage = () => {
    const {
        searchedTodos,
        deleteTodo,
        completeTodo,
        editTodo,
        loading,
        error,
        openModal,
        setOpenModal,
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
                            onEditTodo={editTodo}
                            todoText={todo.text}
                            completed={todo.completed}
                            key={todo.uuid}
                            uuid={todo.uuid}
                            date={todo.date}
                        />
                    })
                }
            </TodoList>

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            {
                openModal && (
                    <Index>
                        <TodoForm/>
                    </Index>

                )
            }
        </div>
    );
};

export {HomePage};