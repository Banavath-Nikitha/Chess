import React from 'react';

const WinCard = ({ playerName }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Congratulations!</h2>
        <p className="text-lg mb-6">{playerName} Wins the Game!</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WinCard;
