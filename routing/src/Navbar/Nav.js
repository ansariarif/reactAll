import './Nav.css';

import {NavLink} from 'react-router-dom';

import Sample from '../Sample/Sample';

function Nav(){
    return(
        <>
       <section className="Nav">

       <NavLink to="/">Home</NavLink>
       <NavLink to="/login">LOGIN</NavLink>
       <NavLink to="/contact">Contact</NavLink>
       <NavLink to="/employee/showall/0">Show Employees</NavLink>
          
       </section>
     
       </>  
    );
}

export default Nav;