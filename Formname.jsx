import React, { createContext, useContext, useState } from "react";

// Create a context for the form values
const FormContext = createContext();

function Formname() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const checkName = /^[a-zA-Z ]{2,30}$/;
  const checkNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const changeName = (event) => {
    setName(event.target.value);
    setNameError(checkName.test(event.target.value) ? "" : "Enter a valid name");
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
    setEmailError(checkMail.test(event.target.value) ? "" : "Enter a valid email");
  };

  const changeNumber = (event) => {
    setNumber(event.target.value);
    setNumberError(checkNumber.test(event.target.value) ? "" : "Enter a valid number");
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!nameError && !emailError && !numberError) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={changeName} />
        {nameError && <span>{nameError}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={changeEmail} />
        {emailError && <span>{emailError}</span>}
      </div>
      <div>
        <label>Number</label>
        <input type="tel" value={number} onChange={changeNumber} />
        {numberError && <span>{numberError}</span>}
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {submitted && (
        <FormContext.Provider value={{ name, email, number }}>
          <FShow />
        </FormContext.Provider>
      )}
    </div>
  );
}

function FShow() {
  const { name } = useContext(FormContext);

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default Formname;
