import { useState } from "react";

function AddItem({ setTasks, tasks }) {
    const [userInput, setUserInput] = useState("");

    function handleChange(event) {
        setUserInput(event.target.value);
    }

    function handleClick() {
        if (userInput.trim() !== "") {
            setTasks([...tasks, userInput]); // Update tasks state in App
        }
        setUserInput(""); // Clear input field
    }

    return (
        <div className="App-div">
            <div>
                <h2 className="add-heading">ADD ITEM</h2>
            </div>
            <hr />
            <p className="add-para">What do you want to do?</p>
            <div className="input-button">
                <input
                    type="text"
                    onChange={handleChange}
                    value={userInput}
                />
                <button className="create-button" onClick={handleClick}>
                    Create
                </button>
            </div>
        </div>
    );
}

export default AddItem;
