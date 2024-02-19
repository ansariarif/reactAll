import './CardList.css';
import {Card} from '../Card/Card';
//import CardArr from './CardArray'

import { myArray2 } from './CardArray';

export function CardList2(){

    return(
      <div>
           <h2 style={{'color':'red'}}>Cartoon</h2>
         <section className="CardList">{
         myArray2.map(ele =>  <Card imgPath={ele.myPath} title={ele.myTitle} infoLink={ele.myLink}></Card> )
        
        }</section>

      </div>
     

        
  );
  
}  