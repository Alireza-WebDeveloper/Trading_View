import React from 'react';

interface TitleSectionProps {
  icon: React.ReactNode;
  title: string;
  symbol: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ icon, title, symbol }) => (
  <div className="flex items-center mb-2">
    <div className="bg-orange-600 rounded-full p-2">{icon}</div>
    <span className="ml-2 text-xl font-bold">{title}</span>
    <span className="text-gray-400 ml-2">• {symbol}</span>
  </div>
);

export default TitleSection;
