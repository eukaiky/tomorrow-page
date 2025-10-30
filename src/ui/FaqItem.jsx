import React from 'react';

export const FaqItem = ({ question, answer }) => (
  <details className="group rounded-lg border border-gray-800 bg-gray-900 overflow-hidden">
    <summary className="flex cursor-pointer list-none items-center justify-between p-6">
      <span className="text-lg font-semibold text-white">{question}</span>

      <span className="text-2xl font-bold text-orange-600 transition-transform duration-300 transform group-open:rotate-45">
        +
      </span>
    </summary>

    <div className="border-t border-gray-800 max-h-0 group-open:max-h-[500px] transition-all duration-500 ease-out">
      <p className="text-base text-gray-400 p-6">
        {answer}
      </p>
    </div>
  </details>
);

export default FaqItem;
