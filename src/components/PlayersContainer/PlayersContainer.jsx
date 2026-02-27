import { useState } from 'react';
import AvailablePlayer from '../AvailablePlayers/AvailablePlayer';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import './PlayerContainer.css'

const PlayersContainer = ({handleSelectedPlayer, selectedPlayers, handleDelete}) => {  

  const [isActive, setIsActive] = useState ('available');
  const handleActiveState = (status) => {
    setIsActive(status)
  }

  return (
    <div>
      <div className='flex gap-2 justify-end'>
        <button onClick={() => handleActiveState('available')} 
        className={`cursor-pointer border border-gray-500 px-2 py-1 rounded-lg ${isActive === 'available' ? 'active' : 'inactive'}`}>
          Available
        </button>
        <button  onClick={() => handleActiveState('selected')}
        className={`cursor-pointer border border-gray-500 px-2 py-1 rounded-lg ${isActive === 'selected' ? 'active' : 'inactive'}`}>
          Selected ({selectedPlayers.length})
        </button>
      </div>
      <div className=''>
        {isActive === 'available' ? (
          <AvailablePlayer handleSelectedPlayer={handleSelectedPlayer}></AvailablePlayer>
        ) : (
          <SelectedPlayers selectedPlayers={selectedPlayers} handleDelete={handleDelete} handleActiveState={handleActiveState}></SelectedPlayers>
        )}
        
        
      </div>
    </div>
  );
};

export default PlayersContainer;