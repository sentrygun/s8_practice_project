import React, { useState } from "react";

import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/User/UserList";


const App = () => {
  const [users, setUsers] = useState('');

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UserList items={users} />
    </div>
  )
};

export default App;
