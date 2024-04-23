import React, { useEffect, useState } from 'react';

const Home = () => {
  const [doctorPrice, setDoctorPrice] = useState(0);
  const [gst, setGst] = useState(true); 
  const [priceonUI, setPriceonUI] = useState(0);
  const [interest, setInterest] = useState(2);

  useEffect(() => {
    let x = 100 - interest;
    if(interest == 100){
        x =0.1
    }
    let y = gst ? (133.7335334 * doctorPrice) / x : (133.7335334 * doctorPrice) / x;
    setPriceonUI(y);
  }, [doctorPrice, interest, gst]);

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-2'>
      <h1>Enter your price</h1>
      <input
        className='w-[200px] border-2 border-black'
        type="number"
        value={doctorPrice}
        placeholder='Enter Doctor Price'
        onChange={(e) => setDoctorPrice(e.target.value)}
      />

      <h1>Do you want to apply GST?</h1>
      <div>
        <input
          type="checkbox"
          id='gst'
          checked={gst} 
          onChange={(e) => setGst(e.target.checked)} 
        />
        <label htmlFor="gst">Apply GST</label>
      </div>

      <h1>Enter your interest in percentage</h1>
      <input
        className='w-[200px] border-2 border-black'
        type="number"
        value={interest}
        placeholder='Enter Interest in percentage'
        onChange={(e) => setInterest(e.target.value)}
      />

      <h1 className='bold text-3xl'>Your price on UI will be :</h1>
      <h1 className='bold text-3xl'>{priceonUI}</h1>
    </div>
  );
};

export default Home;
