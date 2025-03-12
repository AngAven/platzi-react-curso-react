import React, {useContext} from 'react';
import {TodoCounter} from "../../ui/TodoCounter";
import {TodoSearch} from "../../ui/TodoSearch";
import {TodoList} from "../../ui/TodoList";
import {TodoItem} from "../../ui/TodoItem";
import {CreateTodoButton} from "../../ui/CreateTodoButton";
import {TodosError} from "../../ui/TodosError/TodosError";
import {TodosLoading} from "../../ui/TodosLoading";
import {EmptyTodos} from "../../ui/EmptyTodos";
import {TodoContext} from "../TodoContext";
import {useNavigate, useParams} from "react-router-dom";

const HomePage = () => {
    const {
        searchedTodos,
        deleteTodo,
        completeTodo,
        loading,
        error,
    } = useContext(TodoContext)
    const navigate = useNavigate()
    const uuid = useParams()

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
                            onEditTodo={() => {
                                navigate(
                                    `/edit/${todo.uuid}`,
                                    {
                                        state: todo
                                    }
                                )
                            }}
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
                onClick={()=> navigate('/new')}
            />
        </div>
    );
};

export {HomePage};