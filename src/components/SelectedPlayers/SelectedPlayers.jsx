import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({selectedPlayers, handleDelete, handleActiveState}) => {

  return (
    <div>
      <h1 className='font-bold text-2xl text-left mb-3'>Selected Players: {selectedPlayers.length}/6</h1>

      {selectedPlayers.length === 0 ? (
        <div className='border-2 border-dashed rounded-2xl p-10 space-y-5'>
          <h1 className='text-2xl'>No player selected. Please choose your player!</h1>
          <button onClick={() => handleActiveState('available')}
            className='bg-lime-400 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-all cursor-pointer'>
            Go to Available Players
          </button>
        </div>
      ) : (
        <div className='space-y-7'>
          {
            selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} handleDelete={handleDelete}></SelectedPlayer>)
          }

          <button onClick={() => handleActiveState('available')}
          className='text-black bg-lime-400 font-bold px-6 py-2 rounded-xl hover:bg-yellow-400 transition-all cursor-pointer'>
            Add More Player
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedPlayers;