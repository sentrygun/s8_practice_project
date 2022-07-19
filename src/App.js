import React, { useState } from "react";

import UserForm from "./components/NewUser/UserForm";
import UserList from "./components/User/UserList";


const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { username: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
