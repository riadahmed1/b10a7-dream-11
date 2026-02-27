import React from 'react';

const Header = ({handleAddCoins}) => {
  return (
    <div className="bg-black bg-[url(/images/bg-shadow.png)] w-full bg-cover bg-center bg-no-repeat py-5 flex flex-col gap-5 rounded-3xl mb-10">
      <img src="/images/banner-main.png" alt="" className='mx-auto'/>
      <h1 className='font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className='text-xl'>Beyond Boundaries Beyond Limits</p>
      <button onClick={() => handleAddCoins()} className='bg-lime-300 hover:bg-yellow-400 rounded-md text-black p-2 font-bold w-fit mx-auto cursor-pointer'>Claim Free Credit</button>
    </div>
  );
};

export default Header;