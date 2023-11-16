import React from 'react'
import { useState, useEffect } from 'react';




const Drivers = () => {

  const URL = 'https://ergast.com/api/f1/2023/drivers.json'
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json);
        setData(json.MRData.DriverTable.Drivers)
      })
    }
    fetchData();
  },[])

  return (
    <div className=''>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
        <div className='mx-auto text-center pt-10'>
          Name: Max Verstappen<br></br>
          Team: Red Bull Racing<br></br>
          Country: Netherlands<br></br>
          Podiums: 96<br></br>
          Points: 2535.5<br></br>
          Grands Prix entered: 183<br></br>
          World Championships: 3<br></br>
          Highest race finish: 1 (x52)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 30/09/1997<br></br>
          Place of birth: Hasselt,<br></br>
          Belgium<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/ver.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/per.avif'></img> 
        <div className='mx-auto text-center pt-10'>
          Name: Sergio Perez<br></br>
          Team: Red Bull Racing<br></br>
          Country: Mexico<br></br>
          Podiums: 34<br></br>
          Points: 1459<br></br>
          Grands Prix entered: 256<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 1 (x6)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 26/01/1990<br></br>
          Place of birth: Guadalajara,<br></br>
          Mexico<br></br>
        </div>
      </div>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
        <div className='mx-auto text-center pt-10'>
          Name: Lewis Hamilton<br></br>
          Team: Mercedes<br></br>
          Country: United Kingdom<br></br>
          Podiums: 197<br></br>
          Points: 4631.5<br></br>
          Grands Prix entered: 330<br></br>
          World Championships: 7<br></br>
          Highest race finish: 1 (x103)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 07/01/1985<br></br>
          Place of birth: Stevenage,<br></br>
          England<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/ham.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/rus.avif'></img>
        <div className='mx-auto text-center pt-10'>
          Name: George Russell<br></br>
          Team: Mercedes<br></br>
          Country: United Kingdom<br></br>
          Podiums: 10<br></br>
          Points: 450<br></br>
          Grands Prix entered: 102<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 1 (x1)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 15/02/1998<br></br>
          Place of birth: King's Lynn,<br></br>
          England<br></br>
        </div>
      </div>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
      <div className='mx-auto text-center pt-10'>
          Name: Charles Leclerc<br></br>
          Team: Ferrari<br></br>
          Country: Monaco<br></br>
          Podiums: 28<br></br>
          Points: 1038<br></br>
          Grands Prix entered: 123<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 1 (x5)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 16/10/1997<br></br>
          Place of birth: Monte Carlo,<br></br>
          Monaco<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/lec.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/sai.avif'></img> 
        <div className='mx-auto text-center pt-10'>
          Name: Carlos Sainz<br></br>
          Team: Ferrari<br></br>
          Country: Spain<br></br>
          Podiums: 18<br></br>
          Points: 974.5<br></br>
          Grands Prix entered: 183<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 1 (x2)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 01/09/1994<br></br>
          Place of birth: Madrid,<br></br>
          Spain<br></br>
        </div>
      </div>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
      <div className='mx-auto text-center pt-10'>
          Name: Lando Norris<br></br>
          Team: McLaren<br></br>
          Country: United Kingdom<br></br>
          Podiums: 13<br></br>
          Points: 623<br></br>
          Grands Prix entered: 102<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 2 (x7)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 13/11/1999<br></br>
          Place of birth: Bristol,<br></br>
          England<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/nor.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/pia.avif'></img> 
        <div className='mx-auto text-center pt-10'>
          Name: Oscar Piastri<br></br>
          Team: McLaren<br></br>
          Country: Australia<br></br>
          Podiums: 2<br></br>
          Points: 87<br></br>
          Grands Prix entered: 20<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 2 (x1)<br></br>
          Highest grid position: 2<br></br>
          Date of birth: 06/04/2001<br></br>
          Place of birth: Melbourne,<br></br>
          Victoria<br></br>
        </div>
      </div>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
      <div className='mx-auto text-center pt-10'>
          Name: Fernando Alonso<br></br>
          Team: Aston Martin<br></br>
          Country: Spain<br></br>
          Podiums: 106<br></br>
          Points: 2259<br></br>
          Grands Prix entered: 378<br></br>
          World Championships: 2<br></br>
          Highest race finish: 1 (x32)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 29/07/1981<br></br>
          Place of birth: Oviedo,<br></br>
          Spain<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/alo.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/str.avif'></img> 
        <div className='mx-auto text-center pt-10'>
          Name: Lance Stroll<br></br>
          Team: Aston Martin<br></br>
          Country: Canada<br></br>
          Podiums: 3<br></br>
          Points: 257<br></br>
          Grands Prix entered: 141<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 3 (x3)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 29/10/1998<br></br>
          Place of birth: Montreal,<br></br>
          Canada<br></br>
        </div>
      </div>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
      <div className='mx-auto text-center pt-10'>
          Name: Pierre Gasly<br></br>
          Team: Alpine<br></br>
          Country: France<br></br>
          Podiums: 4<br></br>
          Points: 394<br></br>
          Grands Prix entered: 128<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 1 (x1)<br></br>
          Highest grid position: 2<br></br>
          Date of birth: 07/02/1996<br></br>
          Place of birth: Rouen,<br></br>
           France<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/gas.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/oco.avif'></img> 
        <div className='mx-auto text-center pt-10'>
          Name: Esteban Ocon<br></br>
          Team: Alpine<br></br>
          Country: France<br></br>
          Podiums: 3<br></br>
          Points: 410<br></br>
          Grands Prix entered: 131<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 1 (x1)<br></br>
          Highest grid position: 3<br></br>
          Date of birth: 17/09/1996<br></br>
          Place of birth: Évreux,<br></br>
          Normandy<br></br>
        </div>
      </div>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
      <div className='mx-auto text-center pt-10'>
          Name: Yuki Tsunoda<br></br>
          Team: AlphaTauri<br></br>
          Country: Japan<br></br>
          Podiums: N/A<br></br>
          Points: 57<br></br>
          Grands Prix entered: 64<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 4 (x1)<br></br>
          Highest grid position: 7<br></br>
          Date of birth: 11/05/2000<br></br>
          Place of birth: Sagamihara,<br></br>
          Japan<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/tsu.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/ric.avif'></img> 
        <div className='mx-auto text-center pt-10'>
          Name: Daniel Ricciardo<br></br>
          Team: AlphaTauri<br></br>
          Country: Australia<br></br>
          Podiums: 32<br></br>
          Points: 1317<br></br>
          Grands Prix entered: 237<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 1 (x8)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 01/07/1989<br></br>
          Place of birth: Perth,<br></br>
          Australia<br></br>
        </div>
      </div>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
      <div className='mx-auto text-center pt-10'>
          Name: Valtteri Bottas<br></br>
          Team: Alfa Romeo<br></br>
          Country: Finland<br></br>
          Podiums: 67<br></br>
          Points: 1797<br></br>
          Grands Prix entered: 220<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 1 (x10)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 28/08/1989<br></br>
          Place of birth: Nastola, Finland<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/bot.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/zho.avif'></img> 
        <div className='mx-auto text-center pt-10'>
          Name: Zhou Guanyu<br></br>
          Team: Alfa Romeo<br></br>
          Country: China<br></br>
          Podiums: N/A<br></br>
          Points: 12<br></br>
          Grands Prix entered: 42<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 8 (x1)<br></br>
          Highest grid position: 5<br></br>
          Date of birth: 30/05/1999<br></br>
          Place of birth: Shanghai, China<br></br>
        </div>
      </div>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
      <div className='mx-auto text-center pt-10'>
          Name: Alexander Albon<br></br>
          Team: Williams<br></br>
          Country: Thailand<br></br>
          Podiums: 2<br></br>
          Points: 228<br></br>
          Grands Prix entered: 79<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 3 (x2)<br></br>
          Highest grid position: 4<br></br>
          Date of birth: 23/03/1996<br></br>
          Place of birth: London, England<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/alb.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/sar.avif'></img> 
        <div className='mx-auto text-center pt-10'>
          Name: Logan Sargeant<br></br>
          Team: Williams<br></br>
          Country: United States<br></br>
          Podiums: N/A<br></br>
          Points: 1<br></br>
          Grands Prix entered: 20<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 10 (x1)<br></br>
          Highest grid position: 10<br></br>
          Date of birth: 31/12/2000<br></br>
          Place of birth: Fort Lauderdale,<br></br> 
          Florida<br></br>
        </div>
      </div>
      <div className='flex justify-center mx-auto gap-5 m-3 '>
      <div className='mx-auto text-center pt-10'>
          Name: Nico Hulkenberg<br></br>
          Team: Haas F1 Team<br></br>
          Country: Germany<br></br>
          Podiums: N/A<br></br>
          Points: 530<br></br>
          Grands Prix entered: 204<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 4 (x3)<br></br>
          Highest grid position: 1<br></br>
          Date of birth: 19/08/1987<br></br>
          Place of birth: Emmerich am<br></br>
          Rhein, Germany<br></br>
        </div>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/hul.avif'></img>
        <img className='w-[20%] rounded-3xl' src='src/assets/drivers/mag.avif'></img> 
        <div className='mx-auto text-center pt-10'>
          Name: Kevin Magnussen<br></br>
          Team: Haas F1 Team<br></br>
          Country: Denmark<br></br>
          Podiums: 1<br></br>
          Points: 186<br></br>
          Grands Prix entered: 162<br></br>
          World Championships: N/A<br></br>
          Highest race finish: 2 (x1)<br></br>
          Highest grid position: 4<br></br>
          Date of birth: 05/10/1992<br></br>
          Place of birth: Roskilde,<br></br>
           Denmark<br></br>
        </div>
      </div>

    </div>
  )
}

export default Drivers