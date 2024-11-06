import React from 'react';

interface Props {
  text: string;
}

const Alert: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-orange-400 text-black px-2 py-1 uppercase rounded-lg">
      {text}
    </button>
  );
};

export default Alert;
