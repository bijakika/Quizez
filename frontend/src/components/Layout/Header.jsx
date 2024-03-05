import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quizez Online</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
