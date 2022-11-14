import React, { useState } from "react";
import User from "./User";
import "./UserList.css";

const UserList = (props) => {
  if (props.userList.length === 0) {
    return <h2 className="user-list__fallback">No Users Added</h2>;
  }

  return (
    <ol>
      {props.userList.map((user) => (
        <User key={user.id} name={user.name} age={user.age}></User>
      ))}
      ;
    </ol>
  );
};

export default UserList;
