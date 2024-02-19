import * as React from "react";
import './Counter.css';

function Counter(){
    const [counter, setCounter]=React.useState(10);
    

    React.useEffect(() =>{
        counter > 0 && setTimeout(() => setCounter(counter - 1),1000);
        
    },[counter]
    );

   

    return(
        <div className="Counter">
            <div>CountDown: {counter === 0 ? alert("Time Up") : counter}</div>
        </div>
    );
}

export default Counter;