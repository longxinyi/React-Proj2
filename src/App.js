import AddUser from "./components/Users/AddUser";
import React, { useState } from "react";

const emptyList = [];

function App() {
  const [userList, setUserList] = useState(emptyList);

  return (
    <div>
      <AddUser/>
    </div>
  );
}

export default App;
