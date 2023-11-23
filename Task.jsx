import React, { useState } from 'react';

const UserForm = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  
  const [isFormValid, setIsFormValid] = useState(false);

  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumberchange = (event) =>{
    setNumber(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (/^[A-Za-z\s]+$/.test(name) && /\S+@\S+\.\S+/.test(email)&& /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br/>
        <label>
          Number:
          <input type='number' value={number} onChange={handleNumberchange} /> 
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {isFormValid && (
        <div>
          <h2>Validated Information:</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number:{number}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;