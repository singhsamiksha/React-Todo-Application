function ToDoItem({ task, index, handleMarkComplete, handleEditTask, handleDelete }) {
    const handleButtonClick = () => {
        handleMarkComplete(index); // Move the task to completed
    };

    const handleEditClick = () => {
        const newTask = prompt("Edit Task", task); // You can use a modal or other UI for editing
        if (newTask) {
            handleEditTask(index, newTask); // Edit task in parent component
        }
    };

    const handleDeleteClick = () => {
        handleDelete(index); // Delete task in parent component
    };

    return (
        <div className="task-item">
            <div className="task-left">
                <img
                    src="https://cdn-icons-png.freepik.com/256/9497/9497026.png?semt=ais_hybrid"
                    alt="list"
                    height="25px"
                    width="25px"
                />
                <span>{task}</span>
            </div>
            <div className="task-right">
                <img
                    src="https://img.icons8.com/ios11/512/40C057/edit.png"
                    alt="edit"
                    height="25px"
                    width="25px"
                    onClick={handleEditClick}
                />
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                    alt="delete"
                    height="25px"
                    width="25px"
                    onClick={handleDeleteClick}
                />
                <button className="complete-button" onClick={handleButtonClick}>
                    Mark as Complete
                </button>
            </div>
        </div>
    );
}

export default ToDoItem;
