// Module-17-Lattice/client/src/components/ReactionList.jsx

import React from 'react';
import cardStyles from '../assets/css/Card.module.css'; 

const ReactionList = ({ reactions = [] }) => {
  if (reactions.length === 0) {
    return (
      <p className="mt-4 text-center text-gray-500">
        No reactions yet — be the first to respond! 🎉
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 mt-4">
      {reactions.map((reaction) => (
        <div 
          key={reaction._id} 
          className="p-3 text-gray-700 bg-gray-100 rounded shadow-sm"
        >
          <p className="mb-1 text-sm font-semibold">
            {reaction.username} <span className="text-xs text-gray-400">({new Date(reaction.createdAt).toLocaleString()})</span>
          </p>
          <p className="text-sm">{reaction.reactionBody}</p>
        </div>
      ))}
    </div>
  );
};

export default ReactionList;
