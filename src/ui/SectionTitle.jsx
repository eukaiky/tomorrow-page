import React from 'react';

export const SectionTitle = ({ title, subtitle }) => (
  <div className="max-w-xl">
    <h2 className="relative text-3xl font-bold tracking-tight text-white md:text-4xl">
      {title}
      <span className="absolute bottom-0 left-0 -mb-2 block h-1 w-16 bg-orange-600"></span>
    </h2>
    <p className="mt-6 text-lg text-gray-400">{subtitle}</p>
  </div>
);

export default SectionTitle;
