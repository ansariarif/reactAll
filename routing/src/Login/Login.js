import './Login.css';

function Login(){
    return(
       <form className="Form">
                <h1 style={{'text-transform':'uppercase','color':'red','margin-left': '35%'}}>Login Form</h1>
                <div>
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text"  name="username" />
                </div>

                <div>
                    <label htmlFor="Email"><b>Password</b></label>
                    <input type="text" name="Email" />
                </div>

                <button type="submit"> <b>Login</b></button>


       </form>
    );
}


export default Login;