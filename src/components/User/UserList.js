import React from "react";

import UserItem from "./UserItem";

// list comprised of user data, formatted as a series of UserItems
const UserList = (props) => {
  // fallback for when no items are in list
  if (props.item.length === 0) {
    return <h2>No users registered.</h2>;
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          username={user.username}
          age={user.age}
        />
      ))}
    </ul>
  );
};

export default UserList;