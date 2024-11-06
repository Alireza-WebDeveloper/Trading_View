import React from 'react';
import { Link } from 'react-router-dom';

interface LinkContainerProps {
  text: string;
  to: string;
}

const LinkContainer: React.FC<LinkContainerProps> = ({ text, to }) => {
  return (
    <Link
      className="text-white px-5 py-2.5 rounded-md hover:bg-gray-800 text-xl"
      to={to}
    >
      {text}
    </Link>
  );
};

export default LinkContainer;
