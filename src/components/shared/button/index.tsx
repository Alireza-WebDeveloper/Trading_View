import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  handleClick?(): void;
}

const Button: React.FC<Props> = ({ children, handleClick, ...rest }) => {
  return (
    <button
      className="px-6 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white"
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
