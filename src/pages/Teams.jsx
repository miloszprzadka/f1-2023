import React, { useEffect } from 'react'
import { useState } from 'react';
import employees from '/employees.json';
import logos from '/src/logos.json'



// const alfa = "/src/assets/logos/alfa.jpg"


const URL = 'https://ergast.com/api/f1/2023/constructors.json'

const Teams = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json);
        setData(json.MRData.ConstructorTable.Constructors)
      })
    }
    fetchData();
  },[])
 



  return (
    <div className='mt-20'>
      {/* <div className='text-3xl grid grid-cols-5 mx-auto gap-10 pt-20'>
        {data.map(object => (
          <div key={object.constructorId}>{object.name}</div>
    
          ))} 
      </div>       */}
      <div className='w-[90%] grid grid-cols-5 mx-auto gap-10 pt-20'>
        {
          logos.map((logos) => (
            <img src={logos.image}></img>
          ))
        }
      </div>

    </div>
 
  )
}

export default Teams
