import React, { useState } from "react";

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

    //adding it to a list of users

    setEnteredName("");
    setEnteredAge("");

  };

  return (
  <form onSubmit={submitFormHandler}>
    <label htmlFor="username">Username</label>
    <input id="username" type="text" />
    <label htmlFor="age">Age (Years)</label>
    <input id="age" type="number" />
    <button type="submit"> Add User</button>
  </form>
  );
};

export default AddUser;
