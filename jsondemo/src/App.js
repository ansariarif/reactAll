
import './App.css';
import CvoidJson from './CvoidJsonComponent/CovidJson';
import JsonAxios from './CovidJsonAxios/JsonAxios';

function App() {
  return (
    <div className="App">
       {/* <CvoidJson></CvoidJson> */}
       <JsonAxios></JsonAxios>
    </div>
  );
}

export default App;
