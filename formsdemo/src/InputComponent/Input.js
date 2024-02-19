import './Input.css';
import {useState} from 'react';

let username="";
export const Input=()=>{
    let [uname,setUser]=useState("");
    let [username,finalUser]=useState("");
    let changeUser=(event)=>{
        setUser(event.target.value);

    }

    let getFinalUser=()=>{
         finalUser(uname);
       
         
    }

    return(
        <div className="Input">
            <h2>Hello  {username}</h2>
            <label>User Name :</label> <br></br>
            <input  type="text" id ="uname" name="name" onChange={changeUser} value={uname} ></input> <br></br>
            <button onClick={getFinalUser} >Click</button>
        </div>
    );
}

