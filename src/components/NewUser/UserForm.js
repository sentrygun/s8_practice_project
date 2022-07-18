import React, { useState } from "react";

// form component for use in accepting information to create a new user via NewUser

// initializes state for each part of the form
const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');


  // handlers to shift state based on what was entered into the form
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // handler to pass form state as props for storage, and then clear form state
  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSaveUserData(userData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Username</label>
          <input
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>

        <div>
          <label>Age (Years)</label>
          <input
            type='number'
            min='1'
            step='1'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>

      </div>

      <div>
        <button type='submit'>Add User</button>
      </div>
    </form>
  );
};

export default UserForm;