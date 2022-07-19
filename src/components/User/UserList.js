import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css';

// list comprised of user data, formatted as a series of UserItems
const UserList = (props) => {

  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.age} years old)
        </li>
        // <UserItem
        //   key={user.id}
        //   username={user.username}
        //   age={user.age}
        // />
      ))}
    </ul>
    </Card>
  );
};

export default UserList;