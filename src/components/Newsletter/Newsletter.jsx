import React from 'react';

const Newsletter = () => {
  return (
    <div className='relative -mb-45 z-10 border rounded-2xl p-4 bg-white/30'>
      <div className='rounded-2xl bg-white mx-auto p-20 shadow-xl'>
        <h1 className='text-black text-2xl font-bold'>Subscribe to our Newsletter</h1>
        <p className='text-gray-600'>Get the latest updates and nes right in your inbox</p>
        <div className='space-x-3 mt-3'>
          <input type="email" placeholder="Enter your email" id=""
          className='text-black border border-gray-400 rounded-xl px-6 py-3'/>
          <button className='bg-linear-to-r from-pink-400 to-yellow-400 font-bold text-black px-8 py-3 rounded-xl'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;