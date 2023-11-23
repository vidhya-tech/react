import React, { useState } from 'react';
 
function Example5() {
    const [click, setClick] = useState(0);
    
    return (
        <div>
            <p>You clicked {click} times</p>
            <p>The number of times you have clicked is {click %2==0 ? 'even':'odd'}
            </p>
            <button onClick={() => setClick(click =>click + 1)}>
                Click me
            </button>
        </div>
    );
}
 
export default Example5;