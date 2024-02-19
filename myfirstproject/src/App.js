
import './App.css';
import {Header} from './header/Header';
//import NavArray from './NavArray/NavArray';

/* this function will generate a component in React */
import {NavList} from './NavList/NavList';

import Counter from './counter/counter';
import Datetime from './DateTimeComponent/Datetime';

import Timer from './SetInterval/Timer';

import Counters from './SetInterval/Countdown';

let comapnyName="Neosoft";
function App() {

  let temp = 0;
  function selectSeries(){
    
  }



  return (
     
    <div className="App">
    <div>
      <Header></Header>
    </div>  
      
      <div className="Space"></div>

      <NavList></NavList>

      <div>
        <Counter></Counter>
      </div>

      <div>
        <Datetime></Datetime>
      </div>

      


      
      <div>
        <Counters></Counters>
      </div>


   </div>

  


  );
}



export default App;

/* App Component : styling : App.css, tml code : jxs */
