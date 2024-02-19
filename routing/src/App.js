
import './App.css';
import Nav from './Navbar/Nav';
import Login from './Login/Login';
import Contact from './Contact/Contact';
import Home from './HomeComponent/Home';
import PageNotFound from './PageNotFound/PageNotFound';

import Employee from './EmployeeComponent/Employee';

import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
   
      <Nav></Nav>
     
    <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path="/login" element={<Login/>} /> 
      <Route exact path="/contact" element={<Contact/>} ></Route> 
      <Route exact path='*' element={<PageNotFound/>} ></Route> 
     
      <Route path="/employee/:action/:eid" element={<Employee />} />

      <Route path="/employee/:action/:ename" element={<Employee />} />
     

    </Routes>
     
    <button className="btn btn-primary">this is bootstrap button</button>
    <span className="alert alert-warning">Hurry Up ....</span>
     
    </div>
  );
}

export default App;

//  <Login></Login>
//Contact></Contact>