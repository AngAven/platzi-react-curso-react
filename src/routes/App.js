import {HashRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./home/HomePage";
import {EditTodoPage} from "./edit/EditTodoPage";
import {NewTodoPage} from "./new/NewTodoPage";
import {TodoProvider} from "./TodoContext"
import './App.css'


function App() {
    return (
        <TodoProvider>
            <HashRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/new'} element={<NewTodoPage/>}/>
                    <Route path={'/edit/:id'} element={<EditTodoPage/>}/>
                    <Route path={'*'} element={'<p>NotFound<p/>'}/>
                </Routes>
            </HashRouter>
        </TodoProvider>
    );
}

export {App}
