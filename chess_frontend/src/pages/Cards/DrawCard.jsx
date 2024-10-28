import React from 'react';

const DrawCard = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">It's a Draw!</h2>
        <p className="text-lg mb-6">The game ended in a draw. Well played!</p>
        <button
        //   onClick={onClose}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DrawCard;
