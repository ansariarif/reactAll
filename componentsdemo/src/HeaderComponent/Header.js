import './Header.css';

import Nav from '../Nav/Nav';

const hotelName="Kokani Bhavan";
const fname="Harish";
const lname="kumar";


let myStyle={color:'blue', textShadow:'10px 10px 5px',fontSize:'25px'}

function Header(){
    return(
        <header className="Header">
            <h2 className="Header1">Header</h2>
           <Nav></Nav>
           <h2 className="myHeading">Hotel {hotelName}</h2>
           <h3 style={myStyle} contentEditable="false">special kokani food</h3>
           <b style={ {'color':'red','backgroundColor':'yellow','fontSize':'20px' }}>{`Owner Name is ${fname} ${lname}`}</b>
        </header>
        
    );
}

export default Header;