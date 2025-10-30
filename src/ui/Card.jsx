import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div
    className={`rounded-lg border border-gray-800 bg-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}
  >
    {children}
  </div>
);

export default Card;
