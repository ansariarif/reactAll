import './Div.css';

import {CompanyName} from '../App';


function Div(){


    return(
         
            <CompanyName.Consumer>

                {

                    (cname)=>{
                       return(
                            <div className="myDiv">
                                <span>hello you welcome to {cname}...!!!</span>
                            </div>
                       );

                    }
                }

            

            </CompanyName.Consumer>

         
    );
}

export default Div;