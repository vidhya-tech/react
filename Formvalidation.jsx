import { createContext, useContext, useState } from "react"

const context = createContext("")

 

function Formvalidation () {

   

    const [name,setname] = useState ("")

    const [mail,setmail] = useState("")

    const [number,setnumber ] = useState ("")

    // for error

    const [nerror,setnerror] = useState("")

    const [merror,setmerror] = useState("")

    const [perror,setperror] = useState("")

    //regular expression

    const checkmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const checkname = /^[a-zA-Z ]{2,30}$/;
    const checknumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;



    //function

   

    const changename = (event) => {

        setname(event.target.value);

        // Validate name (you can add more validation rules as needed)

        setnerror(checkname.test(event.target.value)?'' : "enter the correct namme" )

      };

   

      const changemail = (event) => {

        setmail(event.target.value);

        // Validate email using the regex

        setmerror(checkmail.test(event.target.value) ? '' : 'Invalid email address');

      };
      const changenumber = (y) =>
      {
        setnumber(y.target.value);
        setperror(checknumber.test(y.target.value) ? '': 'enter valid number' );
      }

      // for result showing

      const [submitted, setsubmitted] = useState(false);

    const show = () =>

    {
       if( !nerror && !merror &&  !perror)
       {
       setsubmitted(true)
       }

       

    }

   

    return (

        <div>
                <div>
                <lable>enter your name:</lable>
                 <input

            type="text"

            placeholder="name"

            value={name}

            onChange={changename}

            />

            {nerror && <p style={{ color: 'red' }}>{nerror}</p>}

            </div>

            <div>
            <lable>enter your email:</lable>

              <input

            type="mail"

            placeholder="mail"

            value={mail}

            onChange={changemail}

            />

            {merror && <p style={{ color: 'red' }}>{merror}</p>}

             </div>

             <div>
             <lable>enter your phone number:</lable>

              <input

            type="number"

            placeholder="number"

            value={number}

            onChange={changenumber}

            />
              {perror && <p style={{ color: 'red' }}>{perror}</p>}

            </div>

            <button type="submit" onClick={show}>Submit</button>            

        

        {submitted && (

        <>

          <context.Provider value={name}>
          <Fshow />
          </context.Provider>
          <context.Provider value={mail}>
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
            
            <p> {myname}aed</p>
             </div>

    )

}

export default Formvalidation;

 