import React from 'react';
import './Registration.css';
import {useState} from 'react';

function Registration(){

    const [data,setData]=useState(null);

    function getData(event){
        setData(event.target.value);
    }
    return(
        <>
            <form className='Form'>
                 <h1 style={{'text-transform':'uppercase','color':'red'}}>Registration Form</h1>
                <div>
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text"  name="username" onChange={getData} />
                </div>

                <div>
                    <label htmlFor="Email"><b>Email</b></label>
                    <input type="text" name="Email" onChange={getData}/>
                </div>

                <div>
                    <label htmlFor="Password"><b>Passowrd</b></label>
                    <input type="text" name="Password" onChange={getData} />
                </div>

                <div>
                    <label htmlFor="Contact"><b>Contact</b></label>
                    <input type="text" name="Contact" onChange={getData} />
                </div>

                <button type="submit"> <b>Registration</b></button>
            </form>

            <h1>{data}</h1>
        </>
    );
}

export default Registration;