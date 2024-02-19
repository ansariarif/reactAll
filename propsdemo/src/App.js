import {useState} from 'react';
import './App.css';

import {CardList} from './CardList/CardList';
import {CardList1} from './CardList/CardList1';
import {CardList2} from './CardList/CardList2';

let choose="tvshows";
function selectSeries() {
  if(choose.includes('Anime')){
    return  <CardList></CardList> 
  }
  else if(choose.includes('International program')){
    return    <CardList1></CardList1> 
  }
  else if(choose.includes('Cartoon')){
    return <CardList2></CardList2>
  }
 
  else{
    return <>
       <CardList></CardList> 
       <CardList1></CardList1>
       <CardList2></CardList2>
    </>
  }
 
}

function selectSeries1(){
  return (
    choose.includes('Anime')?<CardList></CardList>
    :(choose.includes('International program')?<CardList1></CardList1>
    :<><CardList></CardList><CardList1></CardList1></>)
  );
}


function App(){

let [chose1,setOption]=useState('Tvshows');
choose=chose1;

function chOption(event){
  setOption(event.target.value);
  choose=chose1;

}

  return(
    <>
      <header>
        <select value={choose} onChange={chOption}>
          <option value="TvShow">All tv Shows </option>
          <option value="International program">International </option>
          <option value="Anime">Anime  </option>
          <option value="Cartoon">Cartoon  </option>
        </select>
      </header>

    <div>
      {selectSeries()}
    </div>
    </>
   
  );
}

export default App;
