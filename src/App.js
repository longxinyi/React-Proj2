import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import React, { useState } from "react";

const emptyUserList = [];

function App() {
  const [userList, setUserList] = useState(emptyUserList);

  const addUserDetails = (details) => {
    setUserList((prevUserList) => {
      return [details, ...prevUserList];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserDetails} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
