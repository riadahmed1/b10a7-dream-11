import React from 'react';

const Player = ({player, handleSelectedPlayer}) => {
  const {player_name, player_img, country, price} = player

  return (
    <div className='border border-gray-500 rounded-2xl p-4'>
      <img className='rounded-xl mb-3' src={player_img} alt="" />
      <div className='flex items-center gap-5 mb-3'>
        <i class="fa-solid fa-user border rounded-full p-1"></i>
        <h1>{player_name}</h1>
      </div>
      <div className='flex justify-between mb-3 items-center'>
        <div className='flex items-center gap-3'>
          <i class="fa-solid fa-flag"></i>
          <h2>{country}</h2>
        </div>
        <h1 className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>All-Rounder</h1>
      </div>
      <hr className='opacity-30 my-4'/>
      <div>
        <h1 className='text-left mb-2'>Rating</h1>
        <div className='flex justify-between mb-2 items-center'>
          <h1>Left-Hand-Bat</h1>
          <h1 className='text-gray-400'>Left-Hand-Bat</h1>
        </div>
        <div className='flex justify-between items-center'>
          <h1>Price: ${price}</h1>
          <button onClick={() => handleSelectedPlayer(player)} className='border border-gray-500 px-2 py-1 rounded-lg cursor-pointer'>Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Player;