import { useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import CompleteItem from "./components/CompleteItem";

function App() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const handleMarkComplete = (taskIndex) => {
        const task = tasks[taskIndex];
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex)); // Remove from to-do
        setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, task]); // Add to completed
    };

    const handleEditTask = (taskIndex) => {
        const task = task[taskIndex];
        setTasks((prevTasks)) 
    }

    const handleDeleteClick = (taskIndex) => {
        const task = tasks[taskIndex];
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex));
    }

    return (
        <div>
            <Header />
            <AddItem addTask={addTask} />
            <ToDoList tasks={tasks} handleMarkComplete={handleMarkComplete} />
            <CompleteItem completedTasks={completedTasks} />
        </div>
    );
}

export default App;
