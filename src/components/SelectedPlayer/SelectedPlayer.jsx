import React from 'react';

const SelectedPlayer = ({selectedPlayer, handleDelete}) => {
  const {player_name, player_img} = selectedPlayer;
  return (
    <div className='w-full flex justify-between border rounded-xl items-center p-3'>
      <div className='flex items-center gap-4'>
        <img className='rounded-xl w-50' src={player_img} alt="" />
        <div className='text-left'>
          <h1 className='text-3xl'>{player_name}</h1>
          <p className='text-gray-400'>Left Hand Bat</p>
        </div>
      </div>
      <div>
        <i onClick={() => handleDelete(selectedPlayer)} class="fa-solid fa-trash text-red-400 text-3xl cursor-pointer"></i>
      </div>
    </div>
  );
};

export default SelectedPlayer;