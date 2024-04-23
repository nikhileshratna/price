import React, { useEffect, useState } from 'react';

const Home = () => {
  const [doctorPrice, setDoctorPrice] = useState(0);
  const [gst, setGst] = useState(true); 
  const [priceonUI, setPriceonUI] = useState(0);
  const [interest, setInterest] = useState(2);
  const [operatorPrice, setOperatorPrice] = useState(0);
  const [bhcPrice, setBhcPrice] = useState(0);
  const [tranferCharges, setTranferCharges] = useState(0);
  const[interestDeduction, setInterestDeduction] = useState(0);

  useEffect(() => {
    let x = 100 - interest;
    x = gst ? (1 - (0.0118*interest)) : 100 - interest;
    // if(interest == 100){
    //     x =0.1
    // }
    let y = gst ? (1.338*doctorPrice) / x : (133.7335334 * doctorPrice) / x;

    if(!gst){
      setInterestDeduction(y*0.01*interest);
      let finalY = y - (y*0.01*interest);
      setBhcPrice(finalY*0.1);
      setOperatorPrice(finalY*0.15);
      setTranferCharges((operatorPrice*0.0025) + (doctorPrice*0.0025));
    }
    else{
      setInterestDeduction(y*0.01*interest*1.18);
      let finalY = y - (y*0.01*interest*1.18);
      setBhcPrice(finalY*0.1);
      setOperatorPrice(finalY*0.15);
      setTranferCharges((operatorPrice*0.0025*1.18) + (doctorPrice*0.0025*1.18));
    }

    setPriceonUI(y);
  }, [doctorPrice, interest, gst,operatorPrice,bhcPrice,tranferCharges]);

  return (
    <div className='w-[100vw] h-[100vh] flex flex-row justify-center items-center gap-2'>
      <div className='flex flex-col gap-2'>
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
      <div>
        <h1>BHC will take : <span>{bhcPrice}</span></h1>
        <h1>Operator will take : <span>{operatorPrice}</span></h1>
        <h1>Tranfer charges will be : <span>{tranferCharges}</span></h1>
        <h1>Interest will be : <span>{interestDeduction}</span></h1>
      </div>
    </div>
  );
};

export default Home;
