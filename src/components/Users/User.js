import React, { useState } from "react";
import './User.css';

const User = (props) => {
  return (
    <li>
      <div>
        <h2>
          {props.name} ({props.age})
        </h2>
      </div>
    </li>
  );
};

export default User;
