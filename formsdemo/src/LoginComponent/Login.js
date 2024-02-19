
import { useState } from "react";
import './Login.css'

function Login(){
    let [uname, setUname] = useState('');
    let [passwd, setPass] = useState('');
    let [username, finalUser] = useState('');
    let [password, finalPass] = useState('');

    let changeUser = (e)=>{
        setUname(e.target.value);
    }

    let changePass = (e)=>{
        setPass(e.target.value);
    }
    function getFinalUser(e){
        e.preventDefault();
        finalUser(uname);
        finalPass(passwd);
    }
    return(
        <>
            <form onSubmit={getFinalUser}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Username: </label></td>
                            <td><input type="text" id="usname" name="uname" onChange={changeUser} value={uname}/></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type="password" id="pass" name="pass" onChange={changePass} value={passwd}/></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">SUBMIT</button>
            </form>
            <div className="showDiv">
                <p>username : {username}, password:  {password}</p>

            </div>
        </>
    );
}

export default Login;
