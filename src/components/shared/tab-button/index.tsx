import React from 'react';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-semibold rounded-md capitalize ${
      isActive ? 'bg-gray-600 text-white' : ' text-white'
    }`}
  >
    {label}
  </button>
);

export default TabButton;
