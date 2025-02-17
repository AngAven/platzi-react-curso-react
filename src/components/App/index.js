import './App.css'
import {AppUi} from "./AppUI";
import {TodoProvider} from "../TodoContext";

function App() {
    return (
        <TodoProvider>
            <AppUi/>
        </TodoProvider>
    );
}



export {App}
