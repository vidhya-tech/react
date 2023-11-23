import React, { useState } from 'react';


function Example6(){
    const[click,setClick] = useState(0);
    return(
        <div>
            <p> you clcked {click} times </p>

            <p> The number of times you clicked is {click %2 == 0 ? 'even':'odd'}</p>
            <button onClick={()=>setClick(click+1)}>
                click me
            </button>
        </div>
    )
}
export default Example6;