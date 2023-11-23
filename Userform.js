// UserForm.js
import React, { useState } from 'react';
import { useUserContext } from './UserContext';

const UserForm = () => {
  const { userData, updateUser } = useUserContext();
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateName = (value) => {
    if (!value) {
      setNameError('Name is required');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = (value) => {
    // You can use a more sophisticated email validation regex here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    validateName(newName);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handleSubmit = () => {
    if (validateName(name) && validateEmail(email)) {
      updateUser({ name, email });
    }
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
        {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserForm;
