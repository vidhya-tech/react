import { useState } from "react";


function Myfun(){
    const [color,cb]=useState("red")
    const [count,cbc]=useState(0)
    const [name,setname]=useState({name:"raja"})
    return (
        <div>
                <h1 onClick={()=>{cb("blue")}}> the color is {color}</h1>
                <button onClick={()=>{cbc(count+1)}}>increment</button>
                <h2>value is {count}</h2>
                <button onClick={()=>{cbc(count-1)}}>decremnet</button>
                <p> name is {name.name}</p>

        </div>
    )
}
export default Myfun;