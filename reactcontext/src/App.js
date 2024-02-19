
import './App.css';

import Footer from './FooterComponent/Footer';

import {createContext} from 'react';


let CompanyName=createContext(); //provider Component
let Location=createContext();
let loc="Dadar, Mumbai";

let company="Neosoft Technologies Private sdfsfsd";

function App() {
  return (
    <div className="App">
        <CompanyName.Provider value={company}>
            <Location.Provider value={loc}>
                <Footer></Footer>
            </Location.Provider>
       </CompanyName.Provider>
       
    </div>
  );
}

export default App;

export {CompanyName,Location};
