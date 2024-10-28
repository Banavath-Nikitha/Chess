import React from 'react';

const LoseCard = ({ playerName}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Game Over!</h2>
        <p className="text-lg mb-6">Sorry, {playerName}. You lost the game.</p>
        <button
          // onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoseCard;
