import { useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import CompleteItem from "./components/CompleteItem";

function App() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const addTask = (task) => {
        tasks.length>=5 ? alert('Your Task List is Overloading, Please Complete your previous task before adding new task!') : setTasks((prevTasks) => [...prevTasks, task]);
    };

    const handleMarkComplete = (taskIndex) => {
        const task = tasks[taskIndex];
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex)); // Remove from to-do
        setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, task]); // Add to completed
    };

    const handleEditTask = (taskIndex, newTask) => {
        const updatedTasks = tasks.map((task, index) =>
            index === taskIndex ? newTask : task
        );
        setTasks(updatedTasks);
    };

    const handleDelete = (taskIndex) => {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex));
    };

    return (
        <div>
            <Header />
            <AddItem addTask={addTask} />
            <div className="gap"></div>
            <ToDoList tasks={tasks} handleMarkComplete={handleMarkComplete} handleEditTask={handleEditTask} handleDelete={handleDelete}/>
            <div className="gap"></div>
            <CompleteItem completedTasks={completedTasks} />
        </div>
    );
}

export default App;
