import './Header.css';
import {useState} from 'react';



export  function Header(){
    let [color , setColor]= useState('yellow');
    let [label, setLabel]=useState('Change Color');
   
    function changeBackground(){
        setColor('pink');
        setLabel('WOW !!!');
    }

    function changeBack(){
        setColor('red');
        setLabel('WOW !!!');
    }

    let [myStyle, setBorder]=useState({});
    const makeStyle=()=>{
        setBorder({border:'5px solid blue'});
    }
    return(
        <header style={{'backgroundColor': color}}>
            <h1>Example of mouse event</h1>
            <button onMouseOver={changeBackground} onMouseOut={changeBack} className="colorButton">{label}</button>
            <input type="text" style={myStyle}  onFocus={makeStyle}/>
           
        </header>
    );
}