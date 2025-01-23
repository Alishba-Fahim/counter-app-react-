// Counter App (1st assignment)

import { useState } from 'react';
import './App.css';

const CounterApp = () => {
  let [counter, setCounter] = useState(0);

  let incrementCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert(`🎯 Maximum value reached! Current value: ${counter}`);
    }
  };

  let decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert(`⚠️ Minimum value reached! Current value: ${counter}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 flex justify-center items-center">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-sm w-full border-4 border-gray-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Counter App
        </h1>
        <p className="text-3xl font-semibold mb-8 text-gray-700">
          Value: <span className="text-4xl text-blue-700">{counter}</span>
        </p>
        <div className="flex justify-around space-x-4">
          <button
            onClick={incrementCounter}
            className="w-32 py-3 rounded-xl bg-green-500 text-white font-bold shadow-lg transform hover:scale-105 hover:bg-green-600 transition-all duration-300 ease-out"
          >
            ➕ Increment
          </button>
          <button
            onClick={decrementCounter}
            className="w-32 py-3 rounded-xl bg-red-500 text-white font-bold shadow-lg transform hover:scale-105 hover:bg-red-600 transition-all duration-300 ease-out"
          >
            ➖ Decrement
          </button>
        </div>
        <p className="mt-8 text-sm text-gray-500 italic">
          🎉 Try reaching the limits for a surprise alert!
        </p>
      </div>
    </div>
  );
};

export default CounterApp;
