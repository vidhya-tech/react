import { createContext, useContext,useEffect,useState } from "react";

const UserContext=createContext();

export function Context2(){
    const[username,setUsername]=useState("");
    useEffect(() => {
    setTimeout(() => {
      setUsername("vidhya, hello");
    }, 3000);
  }, []);

  return(
    <UserContext.Provider value={username}>
    <Layout />
    </UserContext.Provider>
  )

}
function Layout(){
  return(  <div>
        <Header/>

        
    </div>
  )
}

function Header(){
    return(
        <div>
           <Info /> 
        </div>
    )
}

function Info(){
    const username = useContext(UserContext)
    return(
        <div>
            {username}
        </div>

    )
}