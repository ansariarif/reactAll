import { useState } from 'react';
import './Register.css'

function Register(){
   
    let[userRegister,setRegister]=useState({
        fullName:'',
        email:'',
        contact:'',
        username:'',
        password:''
    });

    //let [finalObject,setFinal]=useState(userRegister);
    let[finalObject,setFinalObject]=useState([]);

    function handleUpdations(e){

        console.log(e.target.name+ "=" +e.target.value);
        let tname=e.target.name;
        let tvalue=e.target.value;
        setRegister({...userRegister,[tname]:tvalue});

    }

    function submitform(e){
        e.preventDefault();
        
        finalObject.push(userRegister);

        setFinalObject(finalObject);
    
       // setFinal(userRegister);
    }

    return(
        <div className='Register'>
        <h2>Registration form</h2>
            <form onSubmit={submitform}> 
                <label>Enter Full Name:</label><br></br>
                <input type="text" name="fullName"  onChange={handleUpdations} value={userRegister.fullName}></input> <br></br>
                <label>Enter Email:</label><br></br>
                <input type="email" name="email"  onChange={handleUpdations} value={userRegister.email}></input><br></br>
                <label>Enter  contact:</label><br></br>
                <input type="tel" name="contact"  onChange={handleUpdations} value={userRegister.contact}></input><br></br>
                <label>Set user name:</label><br></br>
                <input type="text" name="username"  onChange={handleUpdations} value={userRegister.username}></input><br></br>
                <label>Set Password:</label><br></br>
                <input type="password" name="password"  onChange={handleUpdations} value={userRegister.password}></input><br></br>

                <input type="submit" value="Register">register</input><br></br>
                <input type="reset" value="Reset">reset</input>
            </form>
            
            <div className="table">

             {finalObject.map((ele,i) =>{
                return(
                    <table className="showTable" key={i}>
                        <tbody>
                            <tr>
                                <td>full Name:</td>
                                <td>{ele.fullName}</td>
                            </tr>
                            <tr>
                                <td>Email :</td>
                                <td>{ele.email}</td>
                            </tr>
                            <tr>
                                <td>contact :</td>
                                <td>{ele.contact}</td>
                            </tr>
                            <tr>
                                <td>username :</td>
                                <td>{ele.username}</td>
                            </tr>
                            <tr>
                                <td>password :</td>
                                <td>{ele.password}</td>
                            </tr>

                        </tbody>

                    </table>
                );
             })}
             
                
            </div>
        </div>
    );
}

export default Register;
