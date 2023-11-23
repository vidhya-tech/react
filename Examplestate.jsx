import React from "react";
import { useState,useEffect} from "react";

function Examplestate(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.write= `You clicked ${count} times`; 
    })
    return(
        <div>
            <p>You clicked {count} times</p> 
            <button onClick={()=>setCount(count+1)}>
                Increment {count} times{""}
            </button>
            
        </div>
    )
    }

export default Examplestate;