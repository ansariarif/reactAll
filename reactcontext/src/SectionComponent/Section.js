


import './Section.css';

import {CompanyName,Location} from '../App';


function Section(){


    return(
         
            <CompanyName.Consumer>

                {

                    (cname)=>{
                       return(
                           <Location.Consumer>
                               {
                                   (location)=>{
                                       return(
                                            <div className="mySection">
                                               <span>this is mumbai office {cname} at {location}...!!!</span>
                                            </div>
                                       );
                                   }
                               }
                           </Location.Consumer>
                       );

                    }
                }

            

            </CompanyName.Consumer>

         
    );
}

export default Section;