import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const AvailablePlayer = ({handleSelectedPlayer}) => {
  const [AvailablePlayers, setAvailablePlayers] = useState([])
  useEffect (() => {
    fetch ('players.json')
    .then (res => res.json())
    .then (data => setAvailablePlayers(data))
  }, [])

  return (
    <div>
      <h1 className='font-bold text-2xl text-left mb-3'>Available Players:</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {
          AvailablePlayers.map(player => <Player key={player.id} player={player} handleSelectedPlayer={handleSelectedPlayer}></Player>)
        }
      </div>
    </div>
  );
};

export default AvailablePlayer;