import { useState } from "react";

function AddItem({ addTask }) {
    const [userInput, setUserInput] = useState("");

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleClick = () => {
        if (userInput.trim() !== "") {
            addTask(userInput); // Add task to the list
            setUserInput("");
        }
    };

    return (
        <div className="App-div">
            <h2 className="add-heading">ADD ITEM</h2>
            <hr />
            <p className="add-para">What do you want to do?</p>
            <div className="input-button">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                />
                <button className="create-button" onClick={handleClick}>
                    Create
                </button>
            </div>
        </div>
    );
}

export default AddItem;
