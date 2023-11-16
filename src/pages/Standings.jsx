import React from 'react'
import { useState, useEffect } from 'react';

const driverURL = 'https://ergast.com/api/f1/2023/driverStandings.json';
const consctructorsURL = 'https://ergast.com/api/f1/2023/constructorStandings.json';



const Standings = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await fetch(driverURL)
      result.json().then(json => {
        //console.log(json);
        setData(json.MRData.StandingsTable.StandingsLists)

      })
    }
    fetchData();
  },[])



  const [info, setInfo] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await fetch(consctructorsURL)
      result.json().then(json => {
        //console.log(json);
        setInfo(json.MRData.StandingsTable.StandingsLists)
      })
    }
    fetchData();
  },[])


  return (
    <div className='flex justify-around text-3xl text-center md:text-sm'>
      <div>
        <h2 className='text-5xl p-5 md:text-xl'>Drivers standings</h2>
        {data.map(object => (
          object.DriverStandings.map(item =>(
            <div className='p-2' key={item.Driver.driverId}>{item.position}. {item.Driver.givenName} {item.Driver.familyName} {item.points} points</div>  
          ))
        ))}
      </div>
      <div>
        <h2 className='text-5xl p-5 md:text-xl'>Constructors standings</h2>
      {info.map(object => (
          object.ConstructorStandings.map(item =>(
            <div className='p-2' key={item.Constructor.constructorId}>{item.position}. {item.Constructor.name} {item.points} points</div>  
          ))
        ))}
      </div>
    </div>
  )
}

export default Standings