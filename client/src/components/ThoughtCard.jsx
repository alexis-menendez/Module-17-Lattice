import React from 'react';
import cardStyles from '../assets/css/Card.module.css';
import ReactionList from './ReactionList';
import { Link } from 'react-router-dom';

const ThoughtCard = ({ thought, showReactions = true }) => {
  if (!thought) return null;

  return (
    <div className={cardStyles.card}>
      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">{thought.username}</h2>
        <p className="mb-2 text-sm text-gray-500">
          Posted on {new Date(thought.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700">{thought.thoughtText}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Link 
          to={`/thoughts/${thought._id}`} 
          className="text-sm text-indigo-600 hover:underline"
        >
          View Thought
        </Link>

        <p className="text-sm text-gray-500">
          {thought.reactionCount || 0} Reactions
        </p>
      </div>

      {showReactions && thought.reactions && (
        <ReactionList reactions={thought.reactions} />
      )}
    </div>
  );
};

export default ThoughtCard;
