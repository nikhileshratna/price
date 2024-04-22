import React, { useEffect, useState } from 'react'

const Home = () => {
    const[doctorPrice,setDoctorPrice] = useState();
    const[priceonUI,setPriceonUI] = useState();
    let y
    useEffect(()=>{
        y = 1.16618906343838*doctorPrice;
        setPriceonUI(y);
    },[doctorPrice])


  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-2'>
        <h1 className='bold text-3xl'>Enter your price</h1>
        <input
        className='w-[200px]'
        type="number"
        value={doctorPrice}
        placeholder='Enter Doctor Price'
        onChange={(e)=>setDoctorPrice(e.target.value)}>
        </input>
        <h1 className='bold text-3xl'>Your price on UI will be :</h1>
        <h1 className='bold text-3xl'>{priceonUI}</h1>
    </div>
    
  )
}

export default Home