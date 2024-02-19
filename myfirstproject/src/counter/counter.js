import {useState,useEffect} from 'react';
import './counter.css';

let count = 0;

function Counter(){
    let state = useState();
  //  console.log(state);

    let [count, setState] = useState(0);
    let[color,setColor]= useState('yellow');
    function incrNum(){
        setState(++count);
    }


    function ChangeColor(){
        setColor('pink');

    }

    useEffect(()=>{
        alert("Counter increment to "+count);
    });

    return(
        <>
        <div className="counterStyle">
          <h2>{count}</h2>
          <button onClick={incrNum} className="clckbtn">Click Me</button>
        </div>

        <div className="counterStyle" style={{'background-color':color}}>
            <button onClick={ChangeColor}>Change Color</button>
        </div>

        </>
    );
}

export default Counter;