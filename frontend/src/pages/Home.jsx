import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-4">Welcome to the Quiz App!</h2>
      <p className="text-lg text-gray-600 text-center mb-8">Test your knowledge and have fun!</p>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
