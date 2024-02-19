import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import empArray from './Details';
import './Employee.css';

function Heading(){
    return(
        <thead>
            <tr >
                <th>ID</th>
                <th>NAME</th>
                <th>SALARY</th>
            </tr>
        </thead>
    );
}

function Body(){
    return(
        <tbody>
            {
                empArray.map((emp) =>{
                    return(
                        <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empSalary}</td>
                        </tr>
                    );
                })
            }
        </tbody>
    );
}

function SearchByID(prop){
    return(
        <tbody>
            {
                empArray.map((emp) =>{
                    if(emp.empId == prop.empId && prop.act === "searchid"){
                        return(
                        <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empSalary}</td>
                        </tr>
                    );
                    }
                })
            }
        </tbody>
    );
}

function SearchByName(prop){
    return(
        <tbody>
            {
                empArray.map((emp) =>{
                    if(emp.empName.toLowerCase().includes(prop.empName) && prop.act === "searchname"){
                        return(
                        <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empSal}</td>
                        </tr>
                    );
                    }
                })
            }
        </tbody>
    );
}

 let Employee = ()=>{
    let {action,data} = useParams();   // React hook to extract route parameters
    return(
        <>
        <section>
            <h3>Search Employee</h3>
            <SearchBarId></SearchBarId>
            <SearchBarName></SearchBarName>
        </section>
        <table border="1" style={{'border' : '1px solid lightgreen'}}>
            <Heading></Heading>
            {
                (action ==='showall' && data == 0)? <Body/> : (action === "searchid") ? <SearchByID empId = {data} act = {action}/> : <SearchByName empName = {data} act = {action}/>
            }
        </table>
        </>
    );
}

function SearchBarId(){
    let [eid, setEId] = useState(0);
    let changeId = (e)=>{
        setEId(e.target.value);
    }
    return(
        <div className='searchBar'>
            <input type="number" placeholder='search employee by id' onChange={changeId}/>
            <NavLink to={`/employee/searchid/${eid}`} className="mySearchNavLink">SEARCH</NavLink>
        </div>
            
    );
}

function SearchBarName(){
    let [ename, setEName] = useState();
    let changeName = (e)=>{
        setEName(e.target.value);
    }
    return(
        <div className='searchBar'>
            <input type="text" placeholder='search employee by Name' onChange={changeName}/>
            <NavLink to={`/employee/searchname/${ename}`} className="mySearchNavLink">SEARCH</NavLink>
        </div>
            
    );
}

export default Employee;