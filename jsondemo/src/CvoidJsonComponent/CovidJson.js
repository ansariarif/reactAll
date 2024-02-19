import {useEffect, useState} from 'react';
import './CvoidJson.css';


function CvoidJson(){
let [myArray,setArray]=useState([]);
let [covidData,setCovidData]=useState({});
let [state,setState]=useState();
let [date,setDate]=useState();

    let getJsonData=async()=>{
    try{    
    const data = await fetch('https://data.covid19india.org/v4/min/timeseries.min.json');
    const jsonData = await data.json();
    //console.log(jsonData);
    setCovidData(jsonData.MH.dates['2021-10-31'].total);
    let stateName='maharashtra';
    setState(stateName);
    let date='2021-10-31';
    setDate(date);
    let confirm=covidData.confirmed;
    let recover=covidData.recovered;
    let tested=covidData.tested;
     myArray=new Array();
     myArray.push({key : 'CONFIRMED',value: jsonData.MH.dates['2021-10-31'].total.confirmed});
     myArray.push({key : 'RECOVERED',value: jsonData.MH.dates['2021-10-31'].total.recovered});
     myArray.push({key : 'TESTED',value: jsonData.MH.dates['2021-10-31'].total.tested});
     setArray(myArray);
    //console.log(`In ${stateName} total confirmed cases till date ${date} are ${confirm} , total revoeer are ${recover}, total tested are ${tested}`);
    }catch(err){
        console.log(err);

    }
  }
  
//    useEffect(()=>{
//        getJsonData();
//    },[covidData]);

        useEffect(()=>{
            getJsonData();
        },[myArray]);

    return(
        <section className="Covidstate">
            {/* <button onClick={getJsonData}>Fetch Cvoid Data</button> */}
            <div className="CovidDiv">
                <h2>in {state}</h2>
                <p>{date}</p>
            </div>
            {/* <FlexItem confirm={covidData.confirmed} recover={covidData.recovered} tested={covidData.tested}></FlexItem> */}
            <FlexItem covidArray={myArray}></FlexItem>
            {/* <div>
                <h2>toal confirmed</h2>
                <p>{covidData.confirmed}</p>
            </div>

            <div>
                <h2>toal tested</h2>
                <p>{covidData.tested}</p>
            </div>

            <div>
                <h2>toal recovered</h2>
                <p>{covidData.recovered}</p>
            </div> */}
        </section>
    );
   
}


function FlexItem(prop){
    return(
        <>
        {/* <div>
                <h2>Total confirm</h2>
                <p>{prop.confirm}</p>
        </div>

        <div>
                <h2>Total Recovered</h2>
                <p>{prop.recover}</p>
        </div>

        <div>
                <h2>Total tested</h2>
                <p>{prop.tested}</p>
        </div> */}
        {
            prop.covidArray.map((element)=>{
                return(
                    <div>
                        <h2>total {element.key}</h2>
                        <p>{element.value}</p>
                    </div>
                );
            })
        }


        
       </>
    );
}

export default CvoidJson;



