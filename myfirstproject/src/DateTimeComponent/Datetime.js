import {useState} from 'react';
import './Datetime.css';

let date = new Date().toLocaleString();

function Datetime(){
   
    let [myDate, setDate] = useState(date);
   
    function changeDate() {
        setDate(new Date().toLocaleString());
    }

    setInterval(()=>changeDate(),1000);

    return(
        <div className="counterStyle">
          <h2>{myDate}</h2>
          <button onClick={changeDate} className="clckbtn">Click Me</button>

        </div>
    );
}

export default Datetime;