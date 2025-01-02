function ToDoItem({ task }) {
    function handleEditClick(){
        
    }

    function handleDeleteClick(){

    }

    return (
        <div className="task-item">
            <div className="task-left">
            <img
                src="https://w7.pngwing.com/pngs/9/504/png-transparent-blue-arrow-icon-bullet-computer-icons-arrow-symbol-arrow-blue-angle-text-thumbnail.png"
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
                width="25px" onClick={handleEditClick}
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                alt="delete"
                height="25px"
                width="25px" onClick={handleDeleteClick}
            />
            <button className="complete-button">Mark as Complete</button>
            </div>
        </div>
    );
}

export default ToDoItem;
