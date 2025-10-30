import React from 'react';

export const FaqItem = ({ question, answer }) => (
  <details className="group rounded-lg border border-gray-800 bg-gray-900">
    <summary className="flex cursor-pointer list-none items-center justify-between p-6">
      <span className="text-lg font-semibold text-white">{question}</span>
      <span className="text-2xl font-bold text-orange-600 transition-transform duration-200 group-open:rotate-180">
        +
      </span>
    </summary>
    <div className="border-t border-gray-800 p-6">
      <p className="text-base text-gray-400">{answer}</p>
    </div>
  </details>
);

export default FaqItem;
