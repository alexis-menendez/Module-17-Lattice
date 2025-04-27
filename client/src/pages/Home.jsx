import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center">
      <h1 className="mb-6 text-4xl font-bold">Welcome to Lattice 🌿</h1>
      <p className="max-w-2xl mb-8 text-lg">
        Lattice is a social network built for mycologists and fungi enthusiasts. 
        Share your thoughts, connect with fellow explorers, and dive into the world of fungi!
      </p>
      <div className="flex gap-4">
        <Link 
          to="/signup" 
          className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Join Us
        </Link>
        <Link 
          to="/thoughts" 
          className="px-4 py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700"
        >
          Explore Thoughts
        </Link>
      </div>
    </div>
  );
};

export default Home;
