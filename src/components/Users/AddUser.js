import React, { useState } from "react";
import "./AddUser.css";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChange = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChange = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const UserData = {
      name: enteredName,
      age: enteredAge,
    };

    props.onAddUser(UserData);

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div className="add-user">
      <form onSubmit={submitFormHandler}>
        <div>
        <label htmlFor="username" style={{fontWeight: "bold"}}>Username</label>
        </div>
        <div>
        <input value={enteredName} type="text" onChange={nameChange} />
        </div>
        <div>
        <label htmlFor="age" style={{fontWeight: "bold"}}>Age (Years)</label>
        </div>
        <div>
        <input value={enteredAge} type="number" onChange={ageChange} />
        </div>
        <div>
        <button type="submit"> Add User</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
