import React,{createContext, useContext, useState} from "react";

const context=createContext("")

function Form() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[number,setNumber]=useState("")

    const[nameerror,setNameerror]=useState("")
    const[emailerror,setEmailerror]=useState("")
    const[numbererror,setNumbererror]=useState("")

    const checkmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const checkname = /^[a-zA-Z ]{2,30}$/;
    const checknumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     

    const changename =(event)=>{
        setName(event.target.value)
        setNameerror(checkname.test(event.target.value)?'':"Enter the name")
    }
    const changemail =(event)=>{
        setEmail(event.target.value)
        setEmailerror(checkmail.test(event.target.value)?'':"Enter the Email")
    }
    const changenumber =(event)=>{
        setNumber(event.target.value)
        setNumbererror(checknumber.test(event.target.value)?'':"Enter the Number")
    }
     
  const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        if (!nameerror && !emailerror && !numbererror) {
          setSubmitted(true);
        }
      };
    return(
        <div>
            <div>
                <label>Name</label>
                <input 
                type="name"
                value={name}
                onChange={changename}
                
                />

            {nameerror && <p style={{ color: 'red' }}>{nameerror}</p>}
            </div>
            <div>
                <label>Email</label>
                <input 
                type="Email"
                value={email}
                onChange={changemail}
                />
                {emailerror && <p style={{ color: 'red' }}>{emailerror}</p>}
            </div>
            <div>
                <label>Number</label>
                <input 
                type="Number"
                value={number}
                onChange={changenumber}
                />
                 {numbererror && <p style={{ color: 'red' }}>{numbererror}</p>}
                 <br/>
                 <button onClick={handleSubmit}>Submit</button>
            </div>

            { submitted && (
                <>
        <context.Provider value={name}>
            <Fshow />
        </context.Provider>
       <context.Provider value={email}>
        <Fshow />
       </context.Provider>
       <context.Provider value={number}>
        <Fshow />
       </context.Provider>
       </>


        
       )}
        </div>

       
    )
}

function Fshow ()

{

    const myname = useContext(context)
     return (
        <div>
            
            <p> {myname}</p>
             </div>

    )

}

export default Form;