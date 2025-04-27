import React from 'react';
import { Link } from 'react-router-dom';
import layoutStyles from '../assets/css/Layout.module.css';

const NotFound = () => {
  return (
    <div className={`${layoutStyles.centeredContent}`}>
      <h1 className="mb-6 text-5xl font-bold text-indigo-600">404</h1>
      <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="max-w-md mb-8 text-center text-gray-500">
        Oops! Looks like you wandered into the wrong part of the mycelium network. 🌿🍄
      </p>
      <Link 
        to="/" 
        className="inline-block px-6 py-2 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
