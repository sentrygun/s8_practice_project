import React from "react";

const UserItem = (props) => {
  // <p> tag may require different formatting
  return (
    <li>
      <div>
        <p>{props.username} ({props.age} years old)</p>
      </div>
    </li>
  );
};

export default UserItem;