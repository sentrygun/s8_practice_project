import React, { useState } from "react";

import UserForm from "./UserForm";

const NewUser = (props) => {

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
      // assigns id to userData by creating a random integer converted to a string.
      // not a huge fan of this, but it's how the expenses app handled it and is a quick
      // fix for this situation.
    };
    props.onAddUser(userData);
  };


  return (
    <div>
      <UserForm
        onSaveUserData={saveUserDataHandler}
      />
    </div>
  );

};

export default NewUser;