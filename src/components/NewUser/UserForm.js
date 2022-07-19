import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './UserForm.module.css';

// form component for use in accepting information to create a new user via NewUser

// initializes state for each part of the form
const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();


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

    // check for empty entries
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    // check for invalid age input
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0).',
      })
      return;
    }

    // const userData = {
    //   username: enteredUsername,
    //   age: enteredAge,
    // };

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type='text'
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </div>

            <div>
              <label htmlFor="age">Age (Years)</label>
              <input
                type='number'
                // min='1'
                // this min prevents invalid inputs, but does so in a way that calls a default
                // error, rather than the one added within the project.
                step='1'
                value={enteredAge}
                onChange={ageChangeHandler}
              />
            </div>

          </div>

          <div>
            <Button type='submit'>Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;