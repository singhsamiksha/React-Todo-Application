import ToDoItem from "./ToDoItem";

function ToDoList({ tasks }) {
    return (
        <div className="App-div">
            <div>
                <h2 className="add-heading">TO-DO LIST</h2>
            </div>
            <hr />
            <div className="task-list">
                {tasks.map((task, index) => (
                    <ToDoItem key={index} task={task} />
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
