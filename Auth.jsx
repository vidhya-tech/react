import React, {useContext} from "react";
import AuthContext from "./Authcontext";
const Auth =()=>{
    const Auth =useContext(AuthContext)
    return(
        <div>
             <h1>Are you authenticated?</h1>
             {Auth.status?
             
             
             
             
             }
        </div>
    )
}