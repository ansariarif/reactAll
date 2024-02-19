import './Counter.css';

import {useSelector, useDispatch} from 'react-redux';
import {incrNum,decrNum} from '../actions/index';



function Counter(){

   let myState=useSelector((reducer)=>reducer.changeNumber)
   let dispatch=useDispatch();

    return(
        <div className="myDiv">
            <button className="btnn" onClick={()=>dispatch(decrNum())}> - </button>
            <input type="text" className="counterInput" value={myState}></input>
            <button className="btnnn" onClick={()=>dispatch(incrNum())}> + </button>
        </div>
    );
}


export default Counter;