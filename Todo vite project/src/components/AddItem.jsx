import { useState } from "react";

function AddItem(){
    const [userInput, setUserInput] = useState("");

    function handleChange(event){
        setUserInput(event.target.value);
        console.log(userInput);
         
    }

    function handleClick(){
         console.log("handled click");
         setUserInput("");
    }

    return(
        <div className="App-div">
           <div>
               <logo></logo>
               <h2 className="add-heading">ADD ITEM</h2>
           </div>
           <hr></hr>
           <p className="add-para">What do you want to do?</p>
           <div className="input-button">
               <input type="text" onChange={handleChange}></input>
               <button className="create-button" onClick={handleClick}>Create</button>
           </div>
        </div>
    )
}

export default AddItem;