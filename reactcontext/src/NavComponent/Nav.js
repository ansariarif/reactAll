

import './Nav.css';

import {CompanyName,Location} from '../App';

import {useContext} from 'react';

function Nav(){
//Hooks must be placed insie Component functions
   let  cname = useContext(CompanyName);
   let  location = useContext(Location);
 
    return(
        <nav className="Nav">
            <p>hello welcome to {cname} at {location}</p>
        </nav>
    );
}


export default Nav;