import {useSelector} from 'react-redux';


function UseState(){

    let myState=useSelector((reducer)=>reducer.changeNumber)

    return(
        <div>
            <span>Counter is   :  <b>{myState}</b></span>
        </div>
    );
}

export default UseState;