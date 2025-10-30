import React from 'react';

export const CtaButton = ({ variant = 'primary', href, children, className = '' }) => {
  const baseClasses =
    'inline-block px-6 py-3 rounded-md font-bold text-sm text-center border-2 transition-all duration-300 ease-in-out';

  const primaryClasses =
    'bg-orange-600 border-orange-600 text-gray-900 hover:bg-gray-100 hover:border-gray-100 hover:text-gray-900 transform hover:-translate-y-0.5';

  const secondaryClasses =
    'bg-transparent border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-gray-900';

  return (
    <a
      href={href}
      className={`${baseClasses} ${
        variant === 'primary' ? primaryClasses : secondaryClasses
      } ${className}`}
    >
      {children}
    </a>
  );
};

export default CtaButton;
  