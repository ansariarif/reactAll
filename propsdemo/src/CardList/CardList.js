
import './CardList.css';
import {Card} from '../Card/Card';
import CardArr from './CardArray'

//import { myArray1 } from './CardArray';

export function CardList(){

    return(
      <div>
       <h2 style={{'color':'red'}}>Anime</h2>
        <section className="CardList">{
          
         CardArr.map(ele =>  <Card imgPath={ele.myPath} title={ele.myTitle} infoLink={ele.myLink}></Card> )
        
        }</section>

        </div>   
  );
  
}  
