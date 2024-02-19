import { useState } from "react";
//import './Registration.css';
import './Register.css';

function Registration(){
    let [userRegister, setRegister] = useState({
        fullName : '',
        email : '',
        contact : '',
        username : '',
        password : ''
    });

    let[finalObject, setFinalObject] = useState([]);

    function handleUpdation(e){
        let tname = e.target.name;
        let tvalue = e.target.value;
        setRegister({...userRegister, [tname] : tvalue})
        
    }

    function submitForm(e){
        e.preventDefault();
        finalObject.push(userRegister);
        setFinalObject(finalObject);
    }
    
    return(
        <>
            <form onSubmit={submitForm}>
            <h3>Registration Form</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Full name: </label></td>
                            <td><input type="text" id="fullname" name="fullName" onChange={handleUpdation} value={userRegister.fullName}/></td>
                        </tr>
                        <tr>
                            <td><label>Email: </label></td>
                            <td><input type="email" id="email" name="email" onChange={handleUpdation} value={userRegister.email}/></td>
                        </tr>
                        <tr>
                            <td><label>Contact: </label></td>
                            <td><input type="tel" id="contact" name="contact" onChange={handleUpdation} value={userRegister.contact}/></td>
                        </tr>
                        <tr>
                            <td><label>Username: </label></td>
                            <td><input type="text" id="usrname" name="username" onChange={handleUpdation} value={userRegister.username}/></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type="password" id="passwd" name="password" onChange={handleUpdation} value={userRegister.password}/></td>
                        </tr>
                        
                        <tr>
                            <td><button type="submit">REGISTER</button></td>
                            <td><button type="reset">RESET</button></td>
                        </tr>
                    </tbody>
                </table>
                
                
            </form>
            <div className="showDiv">
                {finalObject.map((ele,i) =>{
                    return(
                        <table className="showTable" key={i}>
                            <tbody>
                                <tr>
                                    <td>Full Name: </td>
                                    <td>{ele.fullName}</td>
                                </tr>
                                <tr>
                                    <td>Email: </td>
                                    <td>{ele.email}</td>
                                </tr>
                                <tr>
                                    <td>Contact: </td>
                                    <td>{ele.contact}</td>
                                </tr>
                                <tr>
                                    <td>Username: </td>
                                    <td>{ele.username}</td>
                                </tr>
                                <tr>
                                    <td>Password: </td>
                                    <td>{ele.password}</td>
                                </tr>
                            </tbody>
                        </table>
                    );
                })}
            </div>
        </>
    );
}

export default Registration;