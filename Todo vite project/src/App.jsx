import { useState } from "react";
import { Header } from "./components/Header";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import CompleteItem from "./components/CompleteItem";

function App() {
    const [tasks, setTasks] = useState([]);

    return (
        <div>
            <Header />
            <AddItem setTasks={setTasks} tasks={tasks} />
            <div className="gap"></div>
            <ToDoList tasks={tasks} />
            <div className="gap"></div>
            <CompleteItem />
        </div>
    );
}

export default App;
