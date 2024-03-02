// usePlayers.js
import { useState } from 'react';

export const usePlayers = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('');

  const fetchPlayersByPosition = async (position) => {
    // Fetch logic here
  };

  return { players, selectedPosition, fetchPlayersByPosition };
};
