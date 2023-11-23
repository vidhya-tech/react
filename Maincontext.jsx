import React, { createContext, useContext } from "react";

const UserContext = createContext("defaultvalue");
const userName = "vidhya";

export function Maincontext() {
  return (
    <UserContext.Provider >

      <Component2 />
      <Component3 />
      <Component4 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <p>{userName}</p>
      
    </>
  );
}

function Component3() {
  return (
    <>
      <p>{userName}</p>
      
    </>
  );
}

function Component4() {
  const user = useContext(UserContext);

  return (
    <>
       
      <p>{userName}</p>
      
    </>
  );
}
