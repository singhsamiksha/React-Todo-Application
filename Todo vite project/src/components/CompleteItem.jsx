function CompleteItem({ completedTasks }) {
    return (
        <div className="App-div">
            <div>
                <h2 className="add-heading">COMPLETED</h2>
            </div>
            <hr />
            <div className="task-list">
                {completedTasks.map((task, index) => (
                    <div key={index} className="completed-task-item">
                        <div className="task-left">
                        <img src="https://cdn-icons-png.freepik.com/512/6459/6459980.png" alt="completed" width="25px" height="25px"/>
                        <span>{task}</span>
                        </div>
                        <button className="completed-button">Completed</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompleteItem;
